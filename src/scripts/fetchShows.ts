import { prisma } from '@/lib';

const API_KEY = process.env.TMDB_API_KEY!;
const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

type ExternalShow = {
  id: number;
  name: string;
  overview: string | null;
  poster_path: string | null;
  backdrop_path: string | null;
  first_air_date: string | null;
  last_air_date?: string | null;
  genres: { id: number; name: string }[];
  production_companies: {
    id: number;
    name: string;
    logo_path: string | null;
    origin_country?: string;
  }[];
  networks?: { id: number; name: string; logo_path: string | null; origin_country?: string }[];
  imdb_id: string;
  popularity: number | null;
  vote_average: number | null;
  vote_count: number | null;
  number_of_episodes: number | null;
  number_of_seasons: number | null;
  status?: string;
  type?: string;
  original_language?: string;
  adult?: boolean;
};

async function fetchJSON(url: string) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed fetching ${url}: ${res.statusText}`);
  return res.json();
}

// Helper function to upsert genres (shared with movies)
async function upsertGenres(genres: { id: number; name: string }[]) {
  const genrePromises = genres.map(async (genre) => {
    return await prisma.genre.upsert({
      where: { tmdb_id: genre.id },
      update: { name: genre.name },
      create: {
        tmdb_id: genre.id,
        name: genre.name,
      },
    });
  });
  return Promise.all(genrePromises);
}

// Helper function to upsert production companies (shared with movies)
async function upsertProductionCompanies(
  companies: { id: number; name: string; logo_path: string | null; origin_country?: string }[],
) {
  const companyPromises = companies.map(async (company) => {
    return await prisma.productionCompany.upsert({
      where: { tmdb_id: company.id },
      update: {
        name: company.name,
        logo_path: company.logo_path,
        origin_country: company.origin_country || null,
      },
      create: {
        tmdb_id: company.id,
        name: company.name,
        logo_path: company.logo_path,
        origin_country: company.origin_country || null,
      },
    });
  });
  return Promise.all(companyPromises);
}

// Helper function to upsert networks
async function upsertNetworks(
  networks: { id: number; name: string; logo_path: string | null; origin_country?: string }[],
) {
  const networkPromises = networks.map(async (network) => {
    return await prisma.network.upsert({
      where: { tmdb_id: network.id },
      update: {
        name: network.name,
        logo_path: network.logo_path,
        origin_country: network.origin_country || null,
      },
      create: {
        tmdb_id: network.id,
        name: network.name,
        logo_path: network.logo_path,
        origin_country: network.origin_country || null,
      },
    });
  });
  return Promise.all(networkPromises);
}

// Helper function to upsert episodes
async function upsertEpisodes(showId: number, tmdbShowId: number) {
  try {
    // First get show details to know how many seasons
    const showUrl = `https://api.themoviedb.org/3/tv/${tmdbShowId}?api_key=${API_KEY}`;
    const showData = await fetchJSON(showUrl);

    if (!showData.number_of_seasons) return;

    // Fetch episodes for each season (limit to first 3 seasons to avoid too many API calls)
    const seasonsToFetch = Math.min(showData.number_of_seasons, 3);

    for (let seasonNumber = 1; seasonNumber <= seasonsToFetch; seasonNumber++) {
      try {
        const seasonUrl = `https://api.themoviedb.org/3/tv/${tmdbShowId}/season/${seasonNumber}?api_key=${API_KEY}`;
        const seasonData = await fetchJSON(seasonUrl);

        if (!seasonData.episodes) continue;

        // Delete existing episodes for this season
        await prisma.episode.deleteMany({
          where: {
            showId,
            season_number: seasonNumber,
          },
        });

        // Create new episodes
        const episodePromises = seasonData.episodes.map(async (episode: any) => {
          return await prisma.episode.create({
            data: {
              showId,
              season_number: seasonNumber,
              episode_number: episode.episode_number,
              name: episode.name || `Episode ${episode.episode_number}`,
              overview: episode.overview || null,
              air_date: episode.air_date ? new Date(episode.air_date) : null,
              still_path: episode.still_path || null,
              vote_average: episode.vote_average || null,
              vote_count: episode.vote_count || null,
              runtime: episode.runtime || null,
            },
          });
        });

        await Promise.all(episodePromises);
        console.log(`  ✅ Added ${seasonData.episodes.length} episodes for season ${seasonNumber}`);

        // Add delay between season requests
        await delay(200);
      } catch (error) {
        console.error(`  ❌ Error fetching season ${seasonNumber}:`, error);
        continue;
      }
    }
  } catch (error) {
    console.error(`❌ Error fetching episodes for show ${showId}:`, error);
  }
}

export async function fetchShows(page = 1): Promise<void> {
  const url = `https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}&page=${page}`;
  const data = await fetchJSON(url);

  for (const item of data.results) {
    try {
      const detailsUrl = `https://api.themoviedb.org/3/tv/${item.id}?api_key=${API_KEY}&append_to_response=videos,credits,reviews,external_ids`;
      const showDetails = await fetchJSON(detailsUrl);

      const show: ExternalShow = {
        id: showDetails.id,
        name: showDetails.name,
        overview: showDetails.overview,
        poster_path: showDetails.poster_path,
        backdrop_path: showDetails.backdrop_path,
        first_air_date: showDetails.first_air_date,
        last_air_date: showDetails.last_air_date,
        genres: showDetails.genres ?? [],
        production_companies: showDetails.production_companies ?? [],
        networks: showDetails.networks ?? [],
        imdb_id: showDetails.external_ids?.imdb_id ?? '',
        popularity: showDetails.popularity ?? 0,
        vote_average: showDetails.vote_average ?? 0,
        vote_count: showDetails.vote_count ?? 0,
        number_of_episodes: showDetails.number_of_episodes ?? 0,
        number_of_seasons: showDetails.number_of_seasons ?? 0,
        status: showDetails.status,
        type: showDetails.type,
        original_language: showDetails.original_language,
        adult: showDetails.adult,
      };

      // Use tmdb_id instead of imdb_id for consistency
      const tmdbId = show.id.toString();

      // Check if show already exists using tmdb_id
      const existingShow = await prisma.show.findUnique({
        where: { tmdb_id: tmdbId },
      });

      // Upsert related data
      const genres = show.genres.length > 0 ? await upsertGenres(show.genres) : [];
      const productionCompanies =
        show.production_companies.length > 0
          ? await upsertProductionCompanies(show.production_companies)
          : [];
      const networks =
        show.networks && show.networks.length > 0 ? await upsertNetworks(show.networks) : [];

      const showData = {
        tmdb_id: tmdbId,
        name: show.name,
        overview: show.overview || null,
        poster_path: show.poster_path || null,
        backdrop_path: show.backdrop_path || null,
        first_air_date: show.first_air_date ? new Date(show.first_air_date) : null,
        last_air_date: show.last_air_date ? new Date(show.last_air_date) : null,
        number_of_seasons: show.number_of_seasons || null,
        number_of_episodes: show.number_of_episodes || null,
        popularity: show.popularity || null,
        vote_average: show.vote_average || null,
        vote_count: show.vote_count || null,
        status: show.status || null,
        type: show.type || null,
        original_language: show.original_language || 'en',
        adult: show.adult || false,
      };

      let savedShow;

      if (existingShow) {
        // Update existing show
        savedShow = await prisma.show.update({
          where: { id: existingShow.id },
          data: showData,
        });
      } else {
        // Create new show
        savedShow = await prisma.show.create({
          data: showData,
        });
      }

      // Handle genre relationships
      await prisma.showGenre.deleteMany({
        where: { showId: savedShow.id },
      });

      if (genres.length > 0) {
        await prisma.showGenre.createMany({
          data: genres.map((genre) => ({
            showId: savedShow.id,
            genreId: genre.id,
          })),
        });
      }

      // Handle production company relationships
      await prisma.showProductionCompany.deleteMany({
        where: { showId: savedShow.id },
      });

      if (productionCompanies.length > 0) {
        await prisma.showProductionCompany.createMany({
          data: productionCompanies.map((company) => ({
            showId: savedShow.id,
            productionCompanyId: company.id,
          })),
        });
      }

      // Handle network relationships
      await prisma.showNetwork.deleteMany({
        where: { showId: savedShow.id },
      });

      if (networks.length > 0) {
        await prisma.showNetwork.createMany({
          data: networks.map((network) => ({
            showId: savedShow.id,
            networkId: network.id,
          })),
        });
      }

      console.log(`✅ Upserted show: ${show.name}`);

      // Fetch episodes for the show (limit to avoid too many API calls)
      if (show.number_of_seasons && show.number_of_seasons > 0) {
        console.log(`  📺 Fetching episodes for ${show.name}...`);
        await upsertEpisodes(savedShow.id, show.id);
      }

      // Add delay to respect API rate limits
      await delay(300);
    } catch (error) {
      console.error(`❌ Error processing show ${item.name}:`, error);
      continue; // Continue with next show if one fails
    }
  }
}

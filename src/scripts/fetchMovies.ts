import { prisma } from '@/lib';

const API_KEY = process.env.TMDB_API_KEY!;
const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

type ExternalMovie = {
  id: number;
  title: string;
  overview: string;
  poster_path: string | null;
  backdrop_path: string | null;
  release_date: string;
  runtime: number | null;
  genres: { id: number; name: string }[];
  production_companies: { id: number; name: string; logo_path: string | null; origin_country?: string }[];
  imdb_id: string;
  popularity: number;
  vote_average: number;
  vote_count: number;
  budget?: number;
  revenue?: number;
  tagline?: string;
  status?: string;
  original_language?: string;
  adult?: boolean;
};

async function fetchJSON(url: string) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed fetching ${url}: ${res.statusText}`);
  return res.json();
}

// Helper function to upsert genres
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

// Helper function to upsert production companies
async function upsertProductionCompanies(companies: { id: number; name: string; logo_path: string | null; origin_country?: string }[]) {
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

// Helper function to upsert cast members
async function upsertCastMembers(movieId: number, cast: any[]) {
  // First, delete existing cast for this movie
  await prisma.castMember.deleteMany({
    where: { movieId }
  });

  const castPromises = cast.slice(0, 15).map(async (actor, index) => { // Limit to first 15 cast members
    // Upsert person first
    const person = await prisma.person.upsert({
      where: { tmdb_id: actor.id },
      update: {
        name: actor.name,
        profile_path: actor.profile_path,
        popularity: actor.popularity,
        known_for_department: actor.known_for_department,
      },
      create: {
        tmdb_id: actor.id,
        name: actor.name,
        profile_path: actor.profile_path,
        popularity: actor.popularity,
        known_for_department: actor.known_for_department,
      },
    });

    // Create cast member relationship
    return await prisma.castMember.create({
      data: {
        movieId,
        personId: person.id,
        character: actor.character || 'Unknown',
        order: index,
      },
    });
  });

  return Promise.all(castPromises);
}

// Helper function to upsert trailers
async function upsertTrailers(movieId: number, videos: any[]) {
  // First, delete existing trailers for this movie
  await prisma.trailer.deleteMany({
    where: { movieId }
  });

  const trailerPromises = videos
    .filter((video) => video.site === 'YouTube' && ['Trailer', 'Teaser'].includes(video.type))
    .slice(0, 5) // Limit to 5 trailers
    .map(async (video) => {
      return await prisma.trailer.create({
        data: {
          movieId,
          key: video.key,
          name: video.name,
          site: video.site,
          type: video.type,
          size: video.size || null,
          official: video.official || false,
        },
      });
    });

  return Promise.all(trailerPromises);
}

// Helper function to upsert reviews
async function upsertReviews(movieId: number, reviews: any[]) {
  // First, delete existing reviews for this movie
  await prisma.review.deleteMany({
    where: { movieId }
  });

  const reviewPromises = reviews.slice(0, 10).map(async (review) => { // Limit to 10 reviews
    return await prisma.review.create({
      data: {
        movieId,
        author: review.author,
        content: review.content,
        rating: review.author_details?.rating || null,
        avatar_path: review.author_details?.avatar_path || null,
        url: review.url || null,
      },
    });
  });

  return Promise.all(reviewPromises);
}

export async function fetchMovies(page = 1): Promise<void> {
  const url = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&page=${page}`;
  const data = await fetchJSON(url);

  for (const item of data.results) {
    try {
      const detailsUrl = `https://api.themoviedb.org/3/movie/${item.id}?api_key=${API_KEY}&append_to_response=videos,credits,reviews`;
      const movieDetails = await fetchJSON(detailsUrl);

      const movie: ExternalMovie = {
        id: movieDetails.id,
        title: movieDetails.title,
        overview: movieDetails.overview,
        poster_path: movieDetails.poster_path,
        backdrop_path: movieDetails.backdrop_path,
        release_date: movieDetails.release_date,
        runtime: movieDetails.runtime,
        genres: movieDetails.genres ?? [],
        production_companies: movieDetails.production_companies ?? [],
        imdb_id: movieDetails.imdb_id ?? movieDetails.id.toString(),
        popularity: movieDetails.popularity ?? 0,
        vote_average: movieDetails.vote_average ?? 0,
        vote_count: movieDetails.vote_count ?? 0,
        budget: movieDetails.budget,
        revenue: movieDetails.revenue,
        tagline: movieDetails.tagline,
        status: movieDetails.status,
        original_language: movieDetails.original_language,
        adult: movieDetails.adult,
      };

      // Check if movie already exists using tmdb_id instead of imdb_id
      const existingMovie = await prisma.movie.findUnique({
        where: { tmdb_id: movie.id.toString() }
      });

      // Upsert genres and production companies
      const genres = await upsertGenres(movie.genres);
      const productionCompanies = await upsertProductionCompanies(movie.production_companies);

      const movieData = {
        tmdb_id: movie.id.toString(), // Use tmdb_id instead of imdb_id
        title: movie.title,
        overview: movie.overview,
        poster_path: movie.poster_path || null,
        backdrop_path: movie.backdrop_path || null,
        release_date: new Date(movie.release_date),
        runtime: movie.runtime ?? 0,
        popularity: movie.popularity,
        vote_average: movie.vote_average,
        vote_count: movie.vote_count,
        budget: movie.budget ? BigInt(movie.budget) : null,
        revenue: movie.revenue ? BigInt(movie.revenue) : null,
        tagline: movie.tagline || null,
        status: movie.status || 'Released',
        original_language: movie.original_language || 'en',
        adult: movie.adult || false,
      };

      let savedMovie;

      if (existingMovie) {
        // Update existing movie
        savedMovie = await prisma.movie.update({
          where: { id: existingMovie.id },
          data: movieData
        });
      } else {
        // Create new movie
        savedMovie = await prisma.movie.create({
          data: movieData
        });
      }

      // Handle genre relationships
      await prisma.movieGenre.deleteMany({
        where: { movieId: savedMovie.id }
      });

      await prisma.movieGenre.createMany({
        data: genres.map(genre => ({
          movieId: savedMovie.id,
          genreId: genre.id
        }))
      });

      // Handle production company relationships
      await prisma.movieProductionCompany.deleteMany({
        where: { movieId: savedMovie.id }
      });

      await prisma.movieProductionCompany.createMany({
        data: productionCompanies.map(company => ({
          movieId: savedMovie.id,
          productionCompanyId: company.id
        }))
      });

      // Handle cast, trailers, and reviews
      if (movieDetails.credits?.cast) {
        await upsertCastMembers(savedMovie.id, movieDetails.credits.cast);
      }

      if (movieDetails.videos?.results) {
        await upsertTrailers(savedMovie.id, movieDetails.videos.results);
      }

      if (movieDetails.reviews?.results) {
        await upsertReviews(savedMovie.id, movieDetails.reviews.results);
      }

      console.log(`✅ Upserted movie: ${movie.title}`);

      // Add delay to respect API rate limits
      await delay(250);

    } catch (error) {
      console.error(`❌ Error processing movie ${item.title}:`, error);
      continue; // Continue with next movie if one fails
    }
  }
}

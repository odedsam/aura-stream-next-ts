import ShowDetailsClient from '@/features/details/ShowDetailsClient';
import SingleMovieHero from '@/features/SingleMovieHero';
import { fetchShowById, fetchShowTrailers, fetchShowCast, fetchShowSeasons } from '@/lib/tmdb';

type Params = Promise<{ id: string }>;

const fetchSeasonDetails = async (showId: string, seasonNumber: number) => {
  const res = await fetch(`https://api.themoviedb.org/3/tv/${showId}/season/${seasonNumber}`, {
    headers: {
      Authorization: `Bearer ${process.env.IMDB_ACCESS_TOKEN}`,
      'Content-Type': 'application/json',
    },
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch season ${seasonNumber}`);
  }
  return res.json();
};

const formatSeasonsData = async (showId: string, seasonsData: any[]) => {
  const validSeasons = seasonsData.filter((s) => s.season_number > 0);

  const detailedSeasons = await Promise.all(
    validSeasons.map(async (season) => {
      const seasonDetails = await fetchSeasonDetails(showId, season.season_number);
      return {
        id: season.id.toString(),
        name: season.name,
        title: season.name,
        number: season.season_number,
        seasonNumber: season.season_number,
        episodeCount: season.episode_count,
        overview: season.overview,
        posterPath: season.poster_path,
        airDate: season.air_date,
        episodes: seasonDetails.episodes || [],
      };
    }),
  );

  return detailedSeasons;
};

const Page = async (props: { params: Params }) => {
  const params = await props.params;
  const id = params.id;

  const [showData, trailers, cast, seasonsData] = await Promise.all([
    fetchShowById(id),
    fetchShowTrailers(id),
    fetchShowCast(id),
    fetchShowSeasons(id),
  ]);

  const formattedSeasons = await formatSeasonsData(id, seasonsData);
  console.log('trailers', showData);
  const trailerKey =
    trailers?.find((t: any) => t.type === 'Trailer' && t.site === 'YouTube')?.key || null;
  console.log('trailerKey : ', trailerKey);
  return (
    <div>
      <SingleMovieHero
        id={id}
        title={showData.title || ''}
        name={showData.name}
        overview={showData.overview}
        backdrop_path={showData.backdrop_path || ''}
        trailerKey={trailerKey}
      />

      <ShowDetailsClient
        seasons={formattedSeasons}
        currentSeason={1}
        showId={id}
        release_date={showData.release_date}
        spoken_languages={showData.spoken_languages}
        genres={showData.genres}
        vote_average={showData.vote_average}
        personas={showData.moviePersonas}
      />
    </div>
  );
};

export default Page;

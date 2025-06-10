import { fetchMovieTrailers, fetchPopularMovies, Movie, Trailer } from '@/lib/tmdb';
import HeroSliderClient from './HeroSliderClient';

export type MovieWithTrailers = Movie & {
  trailers: Trailer[];
};

export type MovieClient = {
  id: number;
  title: string;
  description: string;
  image: string;
  trailerKey: string | null;
};

const getMoviesWithTrailers = async (): Promise<MovieWithTrailers[]> => {
  const movies = await fetchPopularMovies();
  return await Promise.all(
    movies.map(async (movie) => ({
      ...movie,
      trailers: await fetchMovieTrailers(movie.id.toString()),
    })),
  );
};

const HeroSliderServer = async () => {
  const movies = await getMoviesWithTrailers();

  const moviesForClient: MovieClient[] = movies.map((movie) => ({
    id: movie.id,
    title: movie.title || movie.name || 'Untitled',
    description: movie.overview,
    image: movie.backdrop_path
      ? `https://image.tmdb.org/t/p/original${movie.backdrop_path}`
      : '/placeholder.png',
    trailerKey: movie.trailers[0]?.key || null,
  }));
  console.log("moviesForClient : ",moviesForClient);

  return <HeroSliderClient movies={moviesForClient} />;
};

export default HeroSliderServer;

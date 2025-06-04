import { CastMember } from '@/app/components/cards/CastCard';
import { env } from '@/config/env';

const BASE_URL = 'https://api.themoviedb.org/3';

if (!env.IMDB_API_KEY || !env.IMDB_ACCESS_TOKEN) {
  throw new Error('Missing required IMDB API keys in environment variables');
}

const headers = {
  Authorization: `Bearer ${env.IMDB_ACCESS_TOKEN}`,
};

export type Movie = {
  id: number;
  title?: string;
  name?: string;
  backdrop_path?:string;
  overview: string;
  poster_path: string | null;
};

export type Trailer = {
  id: string;
  key: string;
  name: string;
  site: string;
  type: string;
};

export const fetchPopularMovies = async (): Promise<Movie[]> => {
  const res = await fetch(`${BASE_URL}/movie/popular?language=en-US&page=1`, {
    headers,
    next: { revalidate: 3600 },
  });

  if (!res.ok) throw new Error('Failed to fetch popular movies');

  const data = await res.json();
  return data.results;
};

export const fetchPopularShows = async (): Promise<Movie[]> => {
  const res = await fetch(`${BASE_URL}/tv/popular?language=en-US&page=1`, {
    headers,
    next: { revalidate: 3600 },
  });

  if (!res.ok) throw new Error('Failed to fetch popular shows');

  const data = await res.json();
  return data.results;
};

export const fetchMovieById = async (id: string): Promise<Movie> => {
  const res = await fetch(`${BASE_URL}/movie/${id}?language=en-US`, {
    headers,
    next: { revalidate: 3600 },
  });

  if (!res.ok) throw new Error(`Failed to fetch movie with id: ${id}`);

  return res.json();
};

export const fetchShowById = async (id: string): Promise<Movie> => {
  const res = await fetch(`${BASE_URL}/tv/${id}?language=en-US`, {
    headers,
    next: { revalidate: 3600 },
  });

  if (!res.ok) throw new Error(`Failed to fetch show with id: ${id}`);

  return res.json();
};

export const fetchMovieTrailers = async (movieId: string): Promise<Trailer[]> => {
  const res = await fetch(`${BASE_URL}/movie/${movieId}/videos?language=en-US`, {
    headers,
    next: { revalidate: 3600 },
  });

  if (!res.ok) throw new Error(`Failed to fetch trailers for movie ${movieId}`);

  const data = await res.json();
  return data.results.filter(
    (video: Trailer) => video.site === 'YouTube' && video.type === 'Trailer',
  );
};

export const fetchShowTrailers = async (showId: string): Promise<Trailer[]> => {
  const res = await fetch(`${BASE_URL}/tv/${showId}/videos?language=en-US`, {
    headers,
    next: { revalidate: 3600 },
  });

  if (!res.ok) throw new Error(`Failed to fetch trailers for show ${showId}`);

  const data = await res.json();
  return data.results.filter(
    (video: Trailer) => video.site === 'YouTube' && video.type === 'Trailer',
  );
};

export const fetchShowCast = async (id: string): Promise<CastMember[]> => {
  const res = await fetch(`${BASE_URL}/tv/${id}/credits`, {
    headers,
    next: { revalidate: 3600 },
  });

  if (!res.ok) throw new Error(`Failed to fetch cast for show ${id}`);

  const data = await res.json();
  return data.cast;
};

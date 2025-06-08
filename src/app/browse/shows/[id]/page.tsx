import MovieReview from '@/app/components/sections/MovieReview';
import { env } from '@/config/env';
import { CastMember } from '@/types/tmdb';

export type Movie = {
  id: number;
  title?: string;
  name?: string;
  overview: string;
  poster_path?: string | null;
};

export type Review = {
  id: string;
  author: string;
  content: string;
  url: string;
};

const BASE_URL = 'https://api.themoviedb.org/3';

const headers = {
  Authorization: `Bearer ${env.IMDB_ACCESS_TOKEN}`,
};

async function fetchShowById(id: string): Promise<Movie> {
  const res = await fetch(`${BASE_URL}/tv/${id}?language=en-US`, {
    headers,
    next: { revalidate: 3600 },
  });
  if (!res.ok) {
    throw new Error(`Failed to fetch show with id: ${id}`);
  }
  return res.json();
}

async function fetchShowCast(id: string): Promise<CastMember[]> {
  const res = await fetch(`${BASE_URL}/tv/${id}/credits`, {
    headers,
    next: { revalidate: 3600 },
  });
  if (!res.ok) {
    throw new Error(`Failed to fetch cast for show ${id}`);
  }
  const data = await res.json();
  return data.cast;
}

async function fetchShowReviews(id: string): Promise<Review[]> {
  const res = await fetch(`${BASE_URL}/tv/${id}/reviews?language=en-US`, {
    headers,
    next: { revalidate: 3600 },
  });
  if (!res.ok) {
    throw new Error(`Failed to fetch reviews for show ${id}`);
  }
  const data = await res.json();
  return data.results;
}

interface PageProps {
  params: { id: string };
}

const Page = async ({ params }: PageProps) => {
  const [movieData, cast, reviews] = await Promise.all([
    fetchShowById(params.id),
    fetchShowCast(params.id),
    fetchShowReviews(params.id),
  ]);

  return (
    <MovieReview
      movieData={movieData}
      cast={cast}
      reviews={reviews}
      description={movieData.overview}
    />
  );
};

export default Page;

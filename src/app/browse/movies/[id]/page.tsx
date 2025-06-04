export const revalidate = 3600;

import { fetchMovieById, fetchMovieTrailers, fetchMovieReviews, fetchMovieCast } from '@/lib/tmdb';
import MovRev from '@/app/components/sections/MovRev';

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function Page({ params }: PageProps) {
  const { id } = await params;

  const [movieData, trailers] = await Promise.all([fetchMovieById(id), fetchMovieTrailers(id)]);

  const [castResult, reviewsResult] = await Promise.allSettled([
    fetchMovieCast(id),
    fetchMovieReviews(id),
  ]);

  const cast = castResult.status === 'fulfilled' ? castResult.value : [];
  const reviews = reviewsResult.status === 'fulfilled' ? reviewsResult.value : [];

  return (
    <MovRev movieData={movieData} reviews={reviews} cast={cast} description={movieData.overview} />
  );
}

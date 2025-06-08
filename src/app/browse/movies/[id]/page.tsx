import MovieReview from '@/app/components/sections/MovieReview';
import SingleMovieHero from '@/features/SingleMovieHero';
import {
  fetchMovieById,
  fetchMovieTrailers,
  fetchMovieReviews,
  fetchMovieCast,
  fetchMovieCredits,
} from '@/lib/tmdb';

interface PageProps {
  params: { id: string };
}
type Trailer = {
  id: number;
  results: {
    key: string;
    name: string;
    site: 'YouTube' | string;
    type: string;
  }[];
};

export default async function Page({ params }: PageProps) {
  const { id } = await params;
  const [movieData, trailers] = await Promise.all([fetchMovieById(id), fetchMovieTrailers(id)]);

  const [castResult, reviewsResult, creditsResult] = await Promise.allSettled([
    fetchMovieCast(id),
    fetchMovieReviews(id),
    fetchMovieCredits(id),
  ]);

  const cast = castResult.status === 'fulfilled' ? castResult.value : [];
  const reviews = reviewsResult.status === 'fulfilled' ? reviewsResult.value : [];
  const credits = creditsResult.status === 'fulfilled' ? creditsResult.value : null;
  const youtubeTrailer = trailers?.find((vid) => vid.site === 'YouTube' && vid.type === 'Trailer');
  console.log(youtubeTrailer);
  return (
    <>
      <SingleMovieHero
        id={id}
        title={movieData.title as any}
        name={youtubeTrailer?.name}
        overview={movieData.overview as any}
        backdrop_path={movieData.backdrop_path || movieData.poster_path}
        trailerKey={trailers[0]?.key || null}
      />
      <MovieReview
        description={movieData.overview}
        movieData={movieData as any}
        reviews={reviews}
        trailers={trailers}
        crew={credits?.crew}
        cast={cast as any}
      />
    </>
  );
}

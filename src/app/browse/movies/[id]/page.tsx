import MovieReview from '@/app/components/sections/MovieReview';
import SingleMovieHero from '@/features/SingleMovieHero';
import {
  fetchMovieById,
  fetchMovieTrailers,
  fetchMovieReviews,
  fetchMovieCast,
  fetchMovieCredits,
} from '@/lib/tmdb';

type Params = Promise<{ id: string }>;

export default async function Page(props: { params: Params }) {
  const params = await props.params;
  const id = params.id;
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

import { fetchMovieById, fetchMovieTrailers, fetchMovieCast, fetchMovieReviews } from '@/lib/tmdb';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest): Promise<NextResponse> {
  const url = new URL(request.url);
  const id = url.pathname.split('/').pop();

  if (!id) {
    return NextResponse.json({ error: 'Missing movie ID' }, { status: 400 });
  }

  try {
    const [movie, trailers, cast, reviews] = await Promise.allSettled([
      fetchMovieById(id),
      fetchMovieTrailers(id),
      fetchMovieCast(id),
      fetchMovieReviews(id),
    ]);

    return NextResponse.json({ movie, trailers, cast, reviews });
  } catch (error) {
    console.error('Error in movies/[id]/route.ts:', error);
    return NextResponse.json({ error: 'Failed to fetch movie data' }, { status: 500 });
  }
}

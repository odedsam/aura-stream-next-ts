import { fetchMovieById, fetchMovieTrailers } from '@/lib/tmdb';
import { NextResponse } from 'next/server';

export async function GET(request: Request, { params }: { params: { id: string } }) {
  try {
    const movie = await fetchMovieById(params.id);
    console.log(request);
    console.log(params.id);
    const trailers = await fetchMovieTrailers(params.id);

    return NextResponse.json({ movie, trailers });
  } catch (error) {
    console.error('Error in movies/[id]/route.ts:', error);
    return NextResponse.json({ error: 'Failed to fetch movie data' }, { status: 500 });
  }
}

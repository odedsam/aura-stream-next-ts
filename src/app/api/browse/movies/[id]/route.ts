import { fetchMovieById, fetchMovieTrailers } from '@/lib/tmdb';
import { NextRequest, NextResponse } from 'next/server';

export default async function GET(
  request: NextRequest,
  { params }: { params: { id: string } },
): Promise<NextResponse> {
  const { id } = params;
  try {
    const movie = await fetchMovieById(id);
    const trailers = await fetchMovieTrailers(id);

    return NextResponse.json({ movie, trailers });
  } catch (error) {
    console.error('Error in movies/[id]/route.ts:', error);
    return NextResponse.json({ error: 'Failed to fetch movie data' }, { status: 500 });
  }
}

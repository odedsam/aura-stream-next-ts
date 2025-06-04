import { fetchShowById, fetchShowTrailers, fetchShowCast } from '@/lib/tmdb';
import { NextRequest, NextResponse } from 'next/server';

async function GET(
  request: NextRequest,
  { params }: { params: { id: string } },
): Promise<NextResponse> {
  const { id } = params;
  try {
    const movie = await fetchShowById(id);
    const trailers = await fetchShowTrailers(id);
    const showCast = await fetchShowCast(id);

    return NextResponse.json({ movie, trailers, showCast });
  } catch (error) {
    console.error('Error in movies/[id]/route.ts:', error);
    return NextResponse.json({ error: 'Failed to fetch movie data' }, { status: 500 });
  }
}

import { fetchShowById, fetchShowTrailers, fetchShowCast, fetchShowSeasons } from '@/lib/tmdb';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } },
): Promise<NextResponse> {
  const { id } = params;

  try {
    const [show, trailers, cast] = await Promise.allSettled([
      fetchShowById(id),
      fetchShowTrailers(id),
      fetchShowCast(id),
      fetchShowSeasons(id),
    ]);

    console.log('logs :', { show, trailers, cast });
    return NextResponse.json({ show, trailers, cast });
  } catch (error) {
    console.error('Error in shows/[id]/route.ts:', error);
    return NextResponse.json({ error: 'Failed to fetch show data' }, { status: 500 });
  }
}

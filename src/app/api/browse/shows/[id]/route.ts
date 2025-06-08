import { fetchShowById, fetchShowTrailers, fetchShowCast, fetchShowSeasons } from '@/lib/tmdb';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest): Promise<NextResponse> {
  const url = new URL(request.url);
  const id = url.pathname.split('/').pop();
  if (!id) {
    return NextResponse.json({ error: 'Missing show ID' }, { status: 400 });
  }

  try {
    const [show, trailers, cast, seasons] = await Promise.allSettled([
      fetchShowById(id),
      fetchShowTrailers(id),
      fetchShowCast(id),
      fetchShowSeasons(id),
    ]);

    console.log('logs :', { show, trailers, cast, seasons });

    return NextResponse.json({ show, trailers, cast, seasons });
  } catch (error) {
    console.error('Error in shows/[id]/route.ts:', error);
    return NextResponse.json({ error: 'Failed to fetch show data' }, { status: 500 });
  }
}

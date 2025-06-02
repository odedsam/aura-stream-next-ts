import { NextRequest, NextResponse } from 'next/server';
import { performSearch } from '@/lib/search';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get('q');
  const type = searchParams.get('type') || 'all'; // shows, episodes, all
  const limit = parseInt(searchParams.get('limit') || '10');

  // Validate query parameter
  if (!query || query.trim().length === 0) {
    return NextResponse.json(
      { error: 'Query parameter is required' },
      { status: 400 }
    );
  }

  // Validate limit
  if (limit < 1 || limit > 100) {
    return NextResponse.json(
      { error: 'Limit must be between 1 and 100' },
      { status: 400 }
    );
  }

  try {
    const results = await performSearch(query.trim(), type, limit);

    return NextResponse.json({
      query: query.trim(),
      type,
      results,
      total: results.length,
      timestamp: new Date().toISOString()
    }, {
      headers: {
        'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=600',
        'Content-Type': 'application/json'
      }
    });
  } catch (error) {
    console.error('Search error:', error);
    return NextResponse.json(
      {
        error: 'Search failed',
        message: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}

// Optional: Add POST method for complex search queries
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { query, type = 'all', limit = 10, filters = {} } = body;

    if (!query || query.trim().length === 0) {
      return NextResponse.json(
        { error: 'Query is required' },
        { status: 400 }
      );
    }

    const results = await performSearch(query.trim(), type, limit);

    return NextResponse.json({
      query: query.trim(),
      type,
      filters,
      results,
      total: results.length,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    console.error('Search POST error:', error);
    return NextResponse.json(
      { error: 'Search failed' },
      { status: 500 }
    );
  }
}

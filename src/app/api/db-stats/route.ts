import { getDbStats } from '@/lib/db/queries/getDbStats';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const stats = await getDbStats();
    return NextResponse.json(stats);
  } catch (error) {
    console.error('DB stats error:', error);
    return NextResponse.json(
      {
        error: 'Failed to get DB stats',
        details: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 },
    );
  }
}

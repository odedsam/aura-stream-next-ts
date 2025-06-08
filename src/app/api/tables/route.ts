import { getDataTables } from '@/lib/db/queries/getDataTables';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const data = await getDataTables();
    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 },
    );
  }
}

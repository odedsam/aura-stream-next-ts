import { NextResponse } from 'next/server';

const TMDB_URL = 'https://api.themoviedb.org/3';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const genre = searchParams.get('genre');

  const res = await fetch(`${TMDB_URL}/discover/tv?with_genres=${genre}&sort_by=popularity.desc`, {
    headers: {
      Authorization: `Bearer ${process.env.TMDB_ACCESS_TOKEN}`,
    },
    next: { revalidate: 86400 },
  });

  const data = await res.json();
  return NextResponse.json(data.results);
}

import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET(request: Request) {
  try {
    const movieUrl = `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.TMDB_API_KEY}&language=en-US&page=1`;
    const tvUrl = `https://api.themoviedb.org/3/tv/top_rated?api_key=${process.env.TMDB_API_KEY}&language=en-US&page=1`;

    const [movieResponse, tvResponse] = await Promise.all([
      fetch(movieUrl, { headers: { 'Content-Type': 'application/json' } }),
      fetch(tvUrl, { headers: { 'Content-Type': 'application/json' } }),
    ]);

    if (!movieResponse.ok) {
      throw new Error(`TMDB API error (movies): ${movieResponse.status}`);
    }
    if (!tvResponse.ok) {
      throw new Error(`TMDB API error (TV): ${tvResponse.status}`);
    }

    const movieData = await movieResponse.json();
    const tvData = await tvResponse.json();

    const moviesWithType = movieData.results.map((item: any) => ({
      ...item,
      media_type: 'movie',
    }));
    const tvShowsWithType = tvData.results.map((item: any) => ({
      ...item,
      media_type: 'tv',
    }));

    const combinedResults = [...moviesWithType, ...tvShowsWithType];

    for (let i = combinedResults.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [combinedResults[i], combinedResults[j]] = [combinedResults[j], combinedResults[i]];
    }

    const mixedTop10 = combinedResults.slice(0, 10);

    return NextResponse.json({ results: mixedTop10 });
  } catch (error) {
    console.error('Error fetching recommendations:', error);
    return NextResponse.json({ error: 'Failed to fetch recommendations' }, { status: 500 });
  }
}

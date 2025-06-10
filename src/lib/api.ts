const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'https://api.example.com';
const API_KEY = process.env.API_KEY;

interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  release_date: string;
}

interface Show {
  id: number;
  name: string;
  overview: string;
  poster_path: string;
  first_air_date: string;
}

interface ApiResponse<T> {
  results: T[];
  total_pages?: number;
  page?: number;
}

async function fetchApi<T>(path: string, params: Record<string, string> = {}): Promise<T | null> {
  const url = new URL(`${API_BASE_URL}${path}`);
  url.searchParams.append('api_key', API_KEY || '');
  for (const key in params) {
    url.searchParams.append(key, params[key]);
  }

  try {
    const response = await fetch(url.toString(), {
      next: { revalidate: 3600 },
    });
    if (!response.ok) {
      console.error(
        `HTTP EXCEPTION API: ${response.status} ${response.statusText} for  ${url.toString()}`,
      );
      return null;
    }
    return response.json();
  } catch (error) {
    console.error(`Failed To Fetch API: ${error}`);
    return null;
  }
}

export async function getTrendingMovies(): Promise<Movie[]> {
  const data = await fetchApi<ApiResponse<Movie>>('/trending/movie/week');
  return data?.results || [];
}

export async function getTrendingShows(): Promise<Show[]> {
  const data = await fetchApi<ApiResponse<Show>>('/trending/tv/week');
  return data?.results || [];
}

export async function getMovieById(id: string): Promise<Movie | null> {
  return fetchApi<Movie>(`/movie/${id}`);
}

export async function getShowById(id: string): Promise<Show | null> {
  return fetchApi<Show>(`/tv/${id}`);
}

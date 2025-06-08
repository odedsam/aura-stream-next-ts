import fs from 'fs';
import path from 'path';

interface Show {
  id: string;
  title: string;
  description: string;
  genres: string[];
  year: number;
  rating: number;
  network?: string;
}

interface Episode {
  id: string;
  showId: string;
  title: string;
  description: string;
  season: number;
  episode: number;
}

export interface SearchResult {
  type: 'show' | 'episode';
  id: string;
  title: string;
  description: string;
  score: number;
  genres?: string[];
  year?: number;
  rating?: number;
  season?: number;
  episode?: number;
}

let showsCache: Show[] | null = null;
let episodesCache: Episode[] | null = null;
let searchIndex: Map<string, Set<string>> | null = null;

function loadShows(): Show[] {
  if (!showsCache) {
    try {
      const dataPath = path.join(process.cwd(), 'data/tv-api/shows.json');
      const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
      showsCache = Array.isArray(data) ? data : [];
    } catch (error) {
      console.error('Error loading shows data:', error);
      showsCache = [];
    }
  }
  return showsCache || [];
}

function loadEpisodes(): Episode[] {
  if (!episodesCache) {
    try {
      const dataPath = path.join(process.cwd(), 'data/tv-api/episodes.json');
      const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
      episodesCache = Array.isArray(data) ? data : [];
    } catch (error) {
      console.error('Error loading episodes data:', error);
      episodesCache = [];
    }
  }
  return episodesCache || [];
}

function buildSearchIndex() {
  if (searchIndex) return;

  searchIndex = new Map();
  const shows = loadShows();
  const episodes = loadEpisodes();

  // Index shows - only if we have valid data
  if (shows && shows.length > 0) {
    shows.forEach((show) => {
      if (!show || !show.title) return; // Skip invalid entries

      const searchableText =
        `${show.title} ${show.description || ''} ${show.genres?.join(' ') || ''}`.toLowerCase();
      const words = searchableText.split(/\s+/);

      words.forEach((word) => {
        const cleanWord = word.replace(/[^\w]/g, '');
        if (cleanWord.length > 2) {
          if (!searchIndex!.has(cleanWord)) {
            searchIndex!.set(cleanWord, new Set());
          }
          searchIndex!.get(cleanWord)!.add(`show_${show.id}`);
        }
      });
    });
  }

  // Index episodes - only if we have valid data
  if (episodes && episodes.length > 0) {
    episodes.forEach((episode) => {
      if (!episode || !episode.title) return; // Skip invalid entries

      const searchableText = `${episode.title} ${episode.description || ''}`.toLowerCase();
      const words = searchableText.split(/\s+/);

      words.forEach((word) => {
        const cleanWord = word.replace(/[^\w]/g, '');
        if (cleanWord.length > 2) {
          if (!searchIndex!.has(cleanWord)) {
            searchIndex!.set(cleanWord, new Set());
          }
          searchIndex!.get(cleanWord)!.add(`episode_${episode.id}`);
        }
      });
    });
  }
}

function calculateRelevanceScore(
  item: Show | Episode,
  query: string,
  type: 'show' | 'episode',
): number {
  const queryLower = query.toLowerCase();
  let score = 0;

  // Safety checks
  if (!item || !item.title) return 0;

  // Title exact match (highest score)
  if (item.title.toLowerCase() === queryLower) score += 100;

  // Title contains query
  if (item.title.toLowerCase().includes(queryLower)) score += 50;

  // Description contains query
  if (item.description && item.description.toLowerCase().includes(queryLower)) score += 25;

  if (type === 'show') {
    const show = item as Show;
    // Genre match
    if (show.genres?.some((genre) => genre.toLowerCase().includes(queryLower))) score += 30;

    // Boost popular shows (based on rating)
    if (show.rating && typeof show.rating === 'number') score += show.rating * 2;
  }

  return score;
}

export async function performSearch(
  query: string,
  type: string = 'all',
  limit: number = 10,
): Promise<SearchResult[]> {
  buildSearchIndex();

  const shows = loadShows();
  const episodes = loadEpisodes();
  const searchTerms = query
    .toLowerCase()
    .split(/\s+/)
    .filter((term) => term.length > 0);
  const results: SearchResult[] = [];

  // If no valid search terms, return empty results
  if (searchTerms.length === 0) {
    return results;
  }

  // Fast index-based search
  const candidateIds = new Set<string>();

  searchTerms.forEach((term) => {
    searchIndex?.forEach((ids, indexedWord) => {
      if (indexedWord.includes(term)) {
        ids.forEach((id) => candidateIds.add(id));
      }
    });
  });

  // Process shows
  if ((type === 'all' || type === 'shows') && shows.length > 0) {
    shows.forEach((show) => {
      if (!show || !show.id) return; // Skip invalid entries

      if (candidateIds.has(`show_${show.id}`)) {
        const score = calculateRelevanceScore(show, query, 'show');
        if (score > 0) {
          results.push({
            type: 'show',
            id: show.id,
            title: show.title || '',
            description: show.description || '',
            score,
            genres: show.genres || [],
            year: show.year,
            rating: show.rating,
          });
        }
      }
    });
  }

  // Process episodes
  if ((type === 'all' || type === 'episodes') && episodes.length > 0) {
    episodes.forEach((episode) => {
      if (!episode || !episode.id) return; // Skip invalid entries

      if (candidateIds.has(`episode_${episode.id}`)) {
        const score = calculateRelevanceScore(episode, query, 'episode');
        if (score > 0) {
          results.push({
            type: 'episode',
            id: episode.id,
            title: episode.title || '',
            description: episode.description || '',
            score,
            season: episode.season,
            episode: episode.episode,
          });
        }
      }
    });
  }

  return results.sort((a, b) => b.score - a.score).slice(0, limit);
}

// Additional search functions
export async function searchShows(query: string, limit: number = 10): Promise<SearchResult[]> {
  return performSearch(query, 'shows', limit);
}

export async function searchEpisodes(query: string, limit: number = 10): Promise<SearchResult[]> {
  return performSearch(query, 'episodes', limit);
}

export async function getPopularShows(limit: number = 10): Promise<SearchResult[]> {
  const shows = loadShows();

  return shows
    .sort((a, b) => (b.rating || 0) - (a.rating || 0))
    .slice(0, limit)
    .map((show) => ({
      type: 'show' as const,
      id: show.id,
      title: show.title,
      description: show.description,
      score: show.rating || 0,
      genres: show.genres,
      year: show.year,
      rating: show.rating,
    }));
}

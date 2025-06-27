import type { ContentItem } from '@/types';

export const SHOWS: ContentItem[] = [
  { id: 1, title: "Breaking Bad", type: "show", genre: "Drama", rating: 9.5 },
  { id: 2, title: "Stranger Things", type: "show", genre: "Sci-Fi", rating: 8.7 },
  { id: 3, title: "The Crown", type: "show", genre: "Drama", rating: 8.6 },
];

export const MOVIES: ContentItem[] = [
  { id: 4, title: "Inception", type: "movie", genre: "Sci-Fi", rating: 8.8 },
  { id: 5, title: "The Dark Knight", type: "movie", genre: "Action", rating: 9.0 },
  { id: 6, title: "Pulp Fiction", type: "movie", genre: "Crime", rating: 8.9 },
];


export const STORAGE_KEYS = {
  SAVED_ITEMS: 'streamingApp_savedItems',
  LIKED_ITEMS: 'streamingApp_likedItems',
} as const;

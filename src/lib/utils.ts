import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(price);
};

export const addItemToArray = <T>(array: T[], newItem: T): T[] => {
  return [...array, newItem];
};

export const removeItemFromArray = <T>(array: T[], index: number): T[] => {
  return array.filter((_, i) => i !== index);
};

export const safeParseInt = (value: string, fallback: number = 0): number => {
  const parsed = parseInt(value);
  return isNaN(parsed) ? fallback : parsed;
};

export const incrementNumber = (
  current: number,
  increment: number = 1,
): number => {
  return current + increment;
};

export const isValidMovieYear = (year: number): boolean => {
  const currentYear = new Date().getFullYear();
  return year >= 1800 && year <= currentYear + 10; // Allow future releases
};

export const addLanguageToMovie = (
  languages: string[],
  newLanguage: string = 'Spanish',
): string[] => {
  if (languages.includes(newLanguage)) {
    return languages;
  }
  return addItemToArray(languages, newLanguage);
};

export const addGenreToMovie = (
  genres: string[],
  newGenre: string = 'Action',
): string[] => {
  if (genres.includes(newGenre)) {
    return genres;
  }
  return addItemToArray(genres, newGenre);
};

export const formatDuration = (minutes: number): string => {
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;

  if (hours === 0) return `${remainingMinutes}m`;
  if (remainingMinutes === 0) return `${hours}h`;
  return `${hours}h ${remainingMinutes}m`;
};

export const getMovieAge = (releaseYear: number): number => {
  return new Date().getFullYear() - releaseYear;
};

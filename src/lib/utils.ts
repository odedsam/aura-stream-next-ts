import { QuickAction } from '@/app/components/common/QuickActions';
import { clsx, type ClassValue } from 'clsx';
import { LucideIcon } from 'lucide-react';
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

export const formatResults = <T>(items: T[]): T[] => {
  return items.slice(0, 10);
};

export const formatRating = (rating: number): string => {
  return rating % 1 === 0 ? rating.toString() : rating.toFixed(1);
};
export const formatShowMore = (
  content: string,
  showFull: boolean,
  wordLimit = 50,
): { isLong: boolean; displayed: string } => {
  const words = content.trim().split(/\s+/);
  const isLong = words.length > wordLimit;

  const displayed = showFull || !isLong ? content : words.slice(0, wordLimit).join(' ') + '...';

  return { isLong, displayed };
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

export const incrementNumber = (current: number, increment: number = 1): number => {
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

export const addGenreToMovie = (genres: string[], newGenre: string = 'Action'): string[] => {
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

export const createQuickAction = (
  id: string,
  label: string,
  onClick: () => void,
  options?: Partial<Omit<QuickAction, 'id' | 'label' | 'onClick'>>,
): QuickAction => ({
  id,
  label,
  onClick,
  ...options,
});

export const QuickActionCreators = {
  add: (label: string, onClick: () => void, icon?: LucideIcon) =>
    createQuickAction(`add-${label.toLowerCase()}`, `Add ${label}`, onClick, {
      variant: 'success',
      icon,
    }),

  edit: (label: string, onClick: () => void, icon?: LucideIcon) =>
    createQuickAction(`edit-${label.toLowerCase()}`, `Edit ${label}`, onClick, {
      variant: 'warning',
      icon,
    }),

  delete: (label: string, onClick: () => void, icon?: LucideIcon) =>
    createQuickAction(`delete-${label.toLowerCase()}`, `Delete ${label}`, onClick, {
      variant: 'danger',
      icon,
    }),

  next: (label: string, onClick: () => void, icon?: LucideIcon) =>
    createQuickAction(`next-${label.toLowerCase()}`, `Next ${label}`, onClick, {
      variant: 'primary',
      icon,
    }),
};

export const logger = {
  info: (message: string, data?: any) => {
    console.log(`[INFO] ${new Date().toISOString()}: ${message}`, data);
  },
  error: (message: string, error?: any) => {
    console.error(`[ERROR] ${new Date().toISOString()}: ${message}`, error);
  },
};

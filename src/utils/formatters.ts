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

export function formatText(text: string, maxLength: number): string {
  if (!text) return '';
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trimEnd() + '...';
}

export const formatDuration = (minutes: number): string => {
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;

  if (hours === 0) return `${remainingMinutes}m`;
  if (remainingMinutes === 0) return `${hours}h`;
  return `${hours}h ${remainingMinutes}m`;
};

export const formatTime = (timestamp: Date) => {
  const now = new Date();
  const diff = now.getTime() - timestamp.getTime();
  const minutes = Math.floor(diff / 60000);
  const hours = Math.floor(diff / 3600000);
  const days = Math.floor(diff / 86400000);

  if (minutes < 60) {
    return `${minutes}m ago`;
  } else if (hours < 24) {
    return `${hours}h ago`;
  } else {
    return `${days}d ago`;
  }
};

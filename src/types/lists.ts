export type ContentType = 'show' | 'movie' | 'music';
export type SectionType = 'browse' | 'saved' | 'liked';

export interface ContentItem {
  id: number;
  title: string;
  type: 'show' | 'movie' | 'music';
  genre: string;
  rating?: number;
  artist?: string;
}

export interface ContentSectionProps {
  title: string;
  items: ContentItem[];
  savedItems: ContentItem[];
  likedItems: ContentItem[];
  onToggleSaved: (item: ContentItem) => void;
  onToggleLiked: (item: ContentItem) => void;
  emptyMessage?: string;
}

export interface ContentCardProps {
  item: ContentItem;
  isSaved: boolean;
  isLiked: boolean;
  onToggleSaved: (item: ContentItem) => void;
  onToggleLiked: (item: ContentItem) => void;
}

export interface VolumeControlProps {
  volume: number;
  isMuted: boolean;
  onVolumeChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onToggleMute: () => void;
  className?: string;
  showLabel?: boolean;
}
export interface GlobalVolumeControlProps {
  volume: number;
  isMuted: boolean;
  onVolumeChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onToggleMute: () => void;
}

export interface LikedListProps {
  likedItems: ContentItem[];
  savedItems: ContentItem[];
  onToggleSaved: (item: ContentItem) => void;
  onToggleLiked: (item: ContentItem) => void;
  onClearAllLiked?: () => void;
}

export interface LikedListStatsProps {
  likedItems: ContentItem[];
}

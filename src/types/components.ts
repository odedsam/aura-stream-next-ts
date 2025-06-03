import type { QuickAction } from '@/app/components/common/QuickActions';

export interface RatingData {
  platform: string;
  rating: number;
  maxRating?: number;
}
export interface RatingBlockProps extends RatingData {}

interface CastMember {
  name: string;
  country: string;
  image?: string | null;
}

export interface MovieData {
  releaseYear: number;
  languages: string[];
  ratings: RatingData[];
  genres: string[];
  director: CastMember[];
  music: CastMember[];
}

export type IconComponent = React.ComponentType<{ className?: string }>;

export interface IconLabelProps {
  icon: IconComponent;
  label: string;
  className?: string;
}

export interface CastBlockProps {
  title: string;
  members: CastMember[];
  icon: IconComponent;
}

export interface NavigationBlockProps {
  className?: string;
  children?: React.ReactNode;
}

export interface NavigationBlockProps {
  className?: string;
  children?: React.ReactNode;
}

export interface NavigationBlockComponentProps {
  currentIndex?: number;
  totalItems?: number;
  onPrevious?: () => void;
  onNext?: () => void;
  disabled?: boolean;
  className?: string;
}

export interface QuickActionsProps {
  title?: string;
  actions: QuickAction[];
  className?: string;
  showBorder?: boolean;
  layout?: 'horizontal' | 'vertical' | 'grid';
  maxColumns?: number;
}

export interface Episode {
  id: string;
  number: number;
  title: string;
  description: string;
  duration: string;
  thumbnail: string;
  releaseDate?: string;
}

export interface SeasonMock {
  id: string;
  number: number;
  title: string;
  episodeCount: number;
  episodes: Episode[];
  description?: string;
}

export interface SeasonsEpisodesProps {
  seasons: SeasonMock[];
  currentSeason?: number;
  onEpisodePlay?: (seasonId: string, episodeId: string) => void;
}

export type SeasonsHeader = {
  season: SeasonMock;
  isExpanded: boolean;
  onToggle: () => void;
  onEpisodePlay?: (seasonId: string, episodeId: string) => void;
};

export type EpisodeCardProps = {
  episode: Episode;
  seasonId: string;
  onPlay?: (seasonId: string, episodeId: string) => void;
};
export interface MovieCastMember {
  id: number;
  name: string;
  image: string;
}

export interface Review {
  id: number;
  name: string;
  location: string;
  rating: number;
  content: string;
}

export interface ReviewCardProps {
  review: Review;
}

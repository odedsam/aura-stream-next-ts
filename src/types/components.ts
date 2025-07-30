import type { QuickAction } from '@/components/common/QuickActions';

export interface RatingBlockProps extends RatingData {}

export type ReviewAuthor = {
  id: string;
  author: string;
  author_details: {
    avatar_path?: string | null;
    name: string;
    rating: number;
    username: string;
  };
  content: string;
  updated_at: string;
  url: string;
};


export type CastMember = {
  id: number;
  cast_id: number;
  gender: number;
  order: number;
  popularity: number;
  adult: boolean;
  character: string;
  known_for_department: string;
  original_name: string;
  profile_path?: string;
};

export interface MovieData {
  releaseYear: number;
  languages: string[];
  ratings: RatingData[];
  genres: string[];
  director: CastMember[];
  music: CastMember[];
}

export type CrewMember = {
  adult: boolean;
  credit_id: string;
  department: string;
  gender: number;
  job: string;
  name: string;
  known_for_department: string;
  popularity: number;
  original_name?: string;
  profile_path?: string;
};

// CastMember Partial

export interface CrewPerson {
  job: CrewMember['job'];
  name: CrewMember['name'];
  profile_path: CrewMember['profile_path'];
}

export type Persona = {
  job: string;
  name: string;
  profile_path?: string;
};

export type MovieLanguages = {
  name: string;
};

export type OptionalCrewMember = Partial<CrewMember>;
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

export interface RatingData {
  platform: string;
  rating: number;
  maxRating?: number;
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
  id: number;
  episode_number: number;
  name: string;
  overview: string;
  runtime: string | number;
  still_path: string;
  releaseDate?: string;
  trailerKey?: string;
  poster_path?: string;
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
  seasons: {
    id: string;
    name: string;
    title: string;
    number: number;
    seasonNumber: number;
    episodeCount: number;
    overview: string;
    posterPath: string;
    airDate: string;
    episodes: any[];
  }[];
  currentSeason?: number;
  showId: string;
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

export interface SkeletonProps {
  className?: string;
  variant?: 'text' | 'circular' | 'rectangular' | 'rounded';
  width?: string | number;
  height?: string | number;
  animation?: 'pulse' | 'wave' | 'none';
}

export interface SkeletonTextProps {
  lines?: number;
  className?: string;
}

export interface SkeletonCardProps {
  showAvatar?: boolean;
  showImage?: boolean;
  linesOfText?: number;
  className?: string;
}

export interface SkeletonListProps {
  items?: number;
  showAvatar?: boolean;
  className?: string;
}

export interface SkeletonTableProps {
  rows?: number;
  columns?: number;
  className?: string;
}

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

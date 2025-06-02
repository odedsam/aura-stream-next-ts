export interface SliderIndicatorProps {
  currentIndex: number;
  totalItems: number;
  className?: string;
  dotSize?: 'sm' | 'md' | 'lg';
  activeColor?: string;
  inactiveColor?: string;
  onDotClick?: (index: number) => void;
}

export interface SliderControlProps {
  totalItems: number;
  initialIndex?: number;
  onSlideChange?: (index: number) => void;
  className?: string;
  navigationClassName?: string;
  buttonClassName?: string;
  indicatorProps?: Partial<SliderIndicatorProps>;
  showIndicator?: boolean;
  loop?: boolean;
  disabled?: boolean;
}

export type GenreCardProps = {
  id: string | number;
  title: string;
  images: string[];
  description?: string;
  isTopTen?:boolean;
  onClick?: () => void;
  [key: string]: any;
};

export interface GenreCarouselProps {
  onSlide?: (index: number) => void;
  title: string;
  items: GenreCardProps[];
  itemsPerSlide?: number;
  className?: string;
  titleClassName?: string;
  itemClassName?: string;
  showControls?: boolean;
}
export type GenreCarouselHeaderProps = {
  title: string;
  showControls: boolean;
  totalSlides: number;
  onSlideChange: (index: number) => void;
  titleClassName?: string;
};

export type GenreCarouselFooterProps = {
  currentIndex: number;
  itemsPerSlide: number;
  totalItems: number;
};

export interface GenreCarouselPanelProps {
  items: GenreCardProps[];
  currentIndex: number;
  itemsPerSlide: number;
  itemClassName?: string;
}

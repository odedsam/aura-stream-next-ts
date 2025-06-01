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

export interface GenreItem {
  id: string | number;
  title: string;
  image?: string;
  description?: string;
  [key: string]: any;
}

export interface GenreCarouselProps {
  onSlide?: (index: number) => void;
  title: string;
  items: GenreItem[];
  itemsPerSlide?: number;
  className?: string;
  titleClassName?: string;
  itemClassName?: string;
  showControls?: boolean;
  autoHeight?: boolean;
}

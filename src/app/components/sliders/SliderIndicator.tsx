'use client';
import { cn } from '@/lib/utils';

interface SliderIndicatorProps {
  currentIndex: number;
  totalItems: number;
  className?: string;
  dotClass?: string;
  activeColor?: string;
  inactiveColor?: string;
  onDotClick?: (index: number) => void;
}

export const SliderIndicator = ({
  currentIndex,
  totalItems,
  className,
  dotClass,
  activeColor = 'bg-red-500',
  inactiveColor = 'bg-gray-[#333333]',
  onDotClick,
}: SliderIndicatorProps) => {
  return (
    <div className={cn('flex items-center gap-2', className)}>
      {Array.from({ length: totalItems }).map((_, index) => (
        <button
          key={index}
          onClick={() => onDotClick?.(index)}
          className={cn(
            'rounded-full transition-all duration-200 w-2 h-1 md:w-3 lg:md-4',
            dotClass,
            index === currentIndex ? activeColor : inactiveColor,
            onDotClick && 'hover:scale-110 cursor-pointer',
          )}
          aria-label={`Go to slide ${index + 1}`}
          disabled={!onDotClick}
        />
      ))}
    </div>
  );
};

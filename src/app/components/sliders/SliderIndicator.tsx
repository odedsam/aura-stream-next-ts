'use client';
import { cn } from '@/lib/utils';

interface SliderIndicatorProps {
  currentIndex: number;
  totalItems: number;
  className?: string;
  dotSize?: 'sm' | 'md' | 'lg';
  activeColor?: string;
  inactiveColor?: string;
  onDotClick?: (index: number) => void;
}

export const SliderIndicator = ({
  currentIndex,
  totalItems,
  className,
  dotSize = 'md',
  activeColor = 'bg-red-500',
  inactiveColor = 'bg-gray-[#333333]',
  onDotClick,
}: SliderIndicatorProps) => {
  const sizeClasses = {
    sm: 'w-4 h-1 rounded-full',
    md: 'w-4 h-1 rounded-full',
    lg: 'w-4 h-1 rounded-full',
  };

  const dotClass = sizeClasses[dotSize];

  return (
    <div className={cn('flex items-center gap-2', className)}>
      {Array.from({ length: totalItems }).map((_, index) => (
        <button
          key={index}
          onClick={() => onDotClick?.(index)}
          className={cn(
            'rounded-full transition-all duration-200',
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

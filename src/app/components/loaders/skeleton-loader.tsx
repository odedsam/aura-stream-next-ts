import { cn } from '@/lib/utils';
import type {
  SkeletonCardProps,
  SkeletonListProps,
  SkeletonProps,
  SkeletonTextProps,
  SkeletonTableProps,
} from '@/types/components';

export const Skeleton = ({
  className,
  variant = 'text',
  width,
  height,
  animation = 'pulse',
}: SkeletonProps) => {
  const baseClasses = 'bg-gray-200 dark:bg-gray-700';

  const variantClasses = {
    text: 'h-4 rounded',
    circular: 'rounded-full',
    rectangular: 'rounded-none',
    rounded: 'rounded-lg',
  };

  const animationClasses = {
    pulse: 'animate-pulse',
    wave: 'animate-pulse',
    none: '',
  };

  const style = {
    width: typeof width === 'number' ? `${width}px` : width,
    height: typeof height === 'number' ? `${height}px` : height,
  };

  return (
    <div
      className={`
        ${baseClasses}
        ${variantClasses[variant]}
        ${animationClasses[animation]}
        ${className}
      `}
      style={style}
    />
  );
};

export const SkeletonText = ({ lines = 3, className }: SkeletonTextProps) => {
  return (
    <div className={cn('space-y-2', className)}>
      {Array.from({ length: lines }).map((_, index) => (
        <Skeleton key={index} width={index === lines - 1 ? '75%' : '100%'} className="h-4" />
      ))}
    </div>
  );
};

export const SkeletonCard = ({
  showAvatar = false,
  showImage = true,
  linesOfText = 3,
  className,
}: SkeletonCardProps) => {
  return (
    <div
      className={cn(
        'border border-gray-200 dark:border-gray-700 rounded-lg p-4 space-y-4',
        className,
      )}>
      {showImage && <Skeleton variant="rectangular" height={200} className="w-full" />}

      <div className="space-y-3">
        {showAvatar && (
          <div className="flex items-center space-x-3">
            <Skeleton variant="circular" width={40} height={40} />
            <div className="space-y-2 flex-1">
              <Skeleton width="60%" height={16} />
              <Skeleton width="40%" height={14} />
            </div>
          </div>
        )}

        <div className="space-y-2">
          <Skeleton width="90%" height={20} />
          <SkeletonText lines={linesOfText} />
        </div>
      </div>
    </div>
  );
};

export const SkeletonList = ({ items = 5, showAvatar = true, className }: SkeletonListProps) => {
  return (
    <div className={cn('space-y-4', className)}>
      {Array.from({ length: items }).map((_, index) => (
        <div
          key={index}
          className="flex items-center space-x-3 p-3 border-b border-gray-100 dark:border-gray-800">
          {showAvatar && <Skeleton variant="circular" width={48} height={48} />}
          <div className="flex-1 space-y-2">
            <Skeleton width="70%" height={16} />
            <Skeleton width="50%" height={14} />
          </div>
        </div>
      ))}
    </div>
  );
};

export const SkeletonTable = ({ rows = 5, columns = 4, className }: SkeletonTableProps) => {
  return (
    <div className={cn('space-y-4', className)}>
      <div className="flex space-x-4 pb-2 border-b border-gray-200 dark:border-gray-700">
        {Array.from({ length: columns }).map((_, index) => (
          <Skeleton key={`header-${index}`} width="100%" height={16} className="flex-1" />
        ))}
      </div>

      {Array.from({ length: rows }).map((_, rowIndex) => (
        <div key={`row-${rowIndex}`} className="flex space-x-4 py-2">
          {Array.from({ length: columns }).map((_, colIndex) => (
            <Skeleton
              key={`cell-${rowIndex}-${colIndex}`}
              width="100%"
              height={16}
              className="flex-1"
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default {
  Skeleton,
  SkeletonText,
  SkeletonCard,
  SkeletonList,
  SkeletonTable,
};

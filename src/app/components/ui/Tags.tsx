// components/ui/Tags.tsx
import { cn } from '@/lib/utils';
import * as React from 'react';

interface BoxTagProps {
  icon?: React.ReactNode;
  className?: string;
}

/**
 * Generic icon container for tags, used in cards, badges, etc.
 */
export const BoxTag: React.FC<BoxTagProps> = ({ icon, className }) => {
  return (
    <div
      className={cn(
        'w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center shrink-0',
        className,
      )}>
      {icon}
    </div>
  );
};

/**
 * Example tag for displaying a language icon.
 * Extend this for different types if needed.
 */
export const LanguageTag: React.FC<BoxTagProps> = ({ icon, className }) => {
  return <BoxTag icon={icon} className={cn('bg-blue-600', className)} />;
};

import { cn } from '@/lib/utils';
import * as React from 'react';

interface BoxTagProps {
  icon?: React.ReactNode;
  className?: string;
  children?: React.ReactNode;
}

export const BoxTag: React.FC<BoxTagProps> = ({ icon, className, children }) => {
  return (
    <div className={cn('rounded-lg bg-primary border border-teriary flex items-center justify-center shrink-0', className)}>
      {icon && <>{icon}</>}
      {children}
    </div>
  );
};

export const LanguageTag: React.FC<BoxTagProps> = ({ icon, className }) => {
  return <BoxTag icon={icon} className={cn('bg-blue-600', className)} />;
};

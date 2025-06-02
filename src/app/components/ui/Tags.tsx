import { cn } from '@/lib/utils';
import * as React from 'react';

interface BoxTagProps {
  icon?: React.ReactNode;
  className?: string;
  children?: React.ReactNode;
}


interface TagProps {
  children: React.ReactNode;
  variant?: 'default' | 'language' | 'genre';
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

export const Tag: React.FC<TagProps> = ({ children, variant = "default" }) => {
  const variants: Record<TagProps['variant'] & string, string> = {
    default: "bg-gray-800 text-gray-300 border-gray-700",
    language: "bg-blue-900/30 text-blue-300 border-blue-700/50",
    genre: "bg-purple-900/30 text-purple-300 border-purple-700/50"
  };

  return (
    <span className={`px-3 py-1 rounded-md text-sm border ${variants[variant]} inline-block`}>
      {children}
    </span>
  );
};

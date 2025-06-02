import { ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { GenreCardProps } from '@/types';
import ImageGrid from '../images/GenreImageGrid';

export const GenreCard = ({ className, title, images, onClick }: GenreCardProps) => {
  return (
    <div
      onClick={onClick}
      className={cn(
        'bg-quaternary rounded-xl border border-quinary p-6 hover:bg-gray-900/50 transition-colors duration-200 cursor-pointer group inline-grid max-w-auto',
        className,
      )}>
      <ImageGrid images={images} />

      <div className="flex items-center justify-between">
        <h3 className="text-white text-lg font-medium">{title}</h3>
        <ChevronRight className="w-5 h-5 text-gray-def group-hover:text-white transition-colors duration-200" />
      </div>
    </div>
  );
};

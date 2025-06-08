import { cn } from '@/lib/utils';
import { ChevronRight } from 'lucide-react';
import { GenreCardProps } from '@/types';
import { Badge } from '@/app/components/ui/Badge';
import ImageGrid from '@/app/components/images/ImageGrid';

export const GenreCard = ({ className, title, isTopTen, images, onClick }: GenreCardProps) => {
  return (
    <div
      onClick={onClick}
      className={cn(
        'bg-quaternary grid rounded-xl border border-quinary py-4 px-2 hover:bg-gray-900/50 transition-colors duration-200 cursor-pointer group',
        className,
      )}>
      <ImageGrid images={images} />
      <div className="flex flex-col">
        {isTopTen && <Badge text="Top 10 In" />}
        <div className="flex items-center justify-between mt-2">
          <h3 className="text-white text-lg font-medium">{title}</h3>
          <ChevronRight className="w-5 h-5 text-gray-def group-hover:text-white transition-colors duration-200" />
        </div>
      </div>
    </div>
  );
};

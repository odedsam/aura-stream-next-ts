import { ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
export const GenreCard: React.FC<{
  title: string;
  images: string[];
  onClick?: () => void;
  className?: string;
}> = ({ className, title, images, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={cn(
        'bg-quaternary rounded-xl border border-quinary p-6 hover:bg-gray-900/50 transition-colors duration-200 cursor-pointer group',
        className,
      )}>
      {/* Image Grid */}
      <div className="grid grid-cols-2 gap-2 mb-4">
        {images.slice(0, 4).map((image, index) => (
          <div key={index} className="aspect-square bg-gray-700 rounded-lg overflow-hidden">
            <div className="w-full h-full bg-gradient-to-br from-gray-600 to-gray-800"></div>
          </div>
        ))}
      </div>

      {/* Title with Arrow */}
      <div className="flex items-center justify-between">
        <h3 className="text-white text-lg font-medium">{title}</h3>
        <ChevronRight className="w-5 h-5 text-gray-def group-hover:text-white transition-colors duration-200" />
      </div>
    </div>
  );
};

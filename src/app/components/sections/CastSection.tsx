import CastCard from '../cards/CastCard';
import { useSlider } from '@/hooks/useSlider';
import { cn } from '@/lib/utils';
import { CarouselButton } from '../ui/Buttons';

interface CastMember {
  id: string;
  name:string;
  [key: string]: any;
}

interface CastSectionProps {
  cast: CastMember[];
  visible?: number;
  className?: string;
}

export const CastSection = ({ cast, visible = 6, className }: CastSectionProps) => {
  const { index, next, prev, canNext, canPrev } = useSlider(cast.length, visible);

  if (!cast.length) return null;

  return (
    <section className={cn("content-block-gray", className)}>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-300">Cast</h2>
        <div className="flex gap-2">
          <CarouselButton direction="prev" onClick={prev} disabled={!canPrev} />
          <CarouselButton direction="next" onClick={next} disabled={!canNext} />
        </div>
      </div>

      <div className="overflow-hidden">
        <div
          className="flex gap-4 transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${index * 96}px)` }}
        >
          {cast.map(member => <CastCard key={member.id} member={member} />)}
        </div>
      </div>
    </section>
  );
};

'use client';
import type { CastBlockProps, NavigationBlockComponentProps, NavigationBlockProps, RatingBlockProps } from '@/types/components';
import { ChevronLeft, ChevronRight, User } from 'lucide-react';
import { Button } from '@/app/components/ui/Buttons';
import { IconLabel } from '@/app/components/ui/Labels';
import { cn, formatRating } from '@/lib/utils';
import { StarRating } from '@/app/components/common/StarRating';

export const RatingBlock = ({ platform, rating, maxRating = 5 }: RatingBlockProps) => {
  return (
    <div className="bg-primary p-4 rounded-lg border-2 border-quinary">
      <h4 className="text-white font-semibold mb-2">{platform}</h4>
      <div className="flex items-center gap-2">
        <StarRating rating={rating} maxRating={maxRating} color="red-def" />
        <span className="text-white font-medium">{formatRating(rating)}</span>
      </div>
    </div>
  );
};

export const CastBlock = ({ title, members, icon: Icon }: CastBlockProps) => (
  <div className="space-y-3">
    <IconLabel icon={Icon} label={title} />
    <div className="space-y-3">
      {members.map((member, index) => (
        <div
          key={index}
          className="flex items-center gap-3 bg-primary p-4 rounded-lg border-2 border-quinary">
          <div className="w-12 h-12 rounded-full bg-gray-700 overflow-hidden flex-shrink-0">
            {member.image ? (
              <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <User className="w-6 h-6 text-gray-500" />
              </div>
            )}
          </div>
          <div>
            <h4 className="text-white font-medium">{member.name}</h4>
            <p className="text-gray-def text-sm">From {member.country}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export function NavigationBlock({ className, children }: NavigationBlockProps) {
  return (
    <div className={cn('inline-flex bg-sec border-2 border-teriary rounded-lg p-1', className)}>
      {children}
    </div>
  );
}

export default function NavigationBlockComponent({
  currentIndex = 0,
  totalItems = 1,
  onPrevious,
  onNext,
  disabled = false,
  className,
}: NavigationBlockComponentProps) {
  const handlePrevious = () => {
    if (!disabled && currentIndex > 0 && onPrevious) {
      onPrevious();
    }
  };

  const handleNext = () => {
    if (!disabled && currentIndex < totalItems - 1 && onNext) {
      onNext();
    }
  };

  const isPreviousDisabled = disabled || currentIndex <= 0;
  const isNextDisabled = disabled || currentIndex >= totalItems - 1;

  return (
    <NavigationBlock className={className}>
      <Button variant="dark" onClick={handlePrevious} disabled={isPreviousDisabled}>
        <ChevronLeft size={20} />
      </Button>

      <Button variant="dark" onClick={handleNext} disabled={isNextDisabled}>
        <ChevronRight size={20} />
      </Button>
    </NavigationBlock>
  );
}

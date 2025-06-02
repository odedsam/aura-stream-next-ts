'use client';
import { ChevronLeft, ChevronRight, Star, User } from 'lucide-react';
import { Button } from '../ui/Buttons';
import { cn } from '@/lib/utils';
import {
  CastBlockProps,
  NavigationBlockComponentProps,
  NavigationBlockProps,
  RatingBlockProps,
} from '@/types/components';
import { IconLabel } from './Labels';

export const RatingBlock = ({
  platform,
  rating,
  maxRating = 5,
}: RatingBlockProps) => {
  const renderStars = (): React.ReactElement[] => {
    const stars: React.ReactElement[] = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < maxRating; i++) {
      if (i < fullStars) {
        stars.push(
          <Star key={i} className="w-4 h-4 fill-red-500 text-red-500" />,
        );
      } else if (i === fullStars && hasHalfStar) {
        stars.push(
          <Star key={i} className="w-4 h-4 fill-red-500/50 text-red-500" />,
        );
      } else {
        stars.push(<Star key={i} className="w-4 h-4 text-gray-600" />);
      }
    }
    return stars;
  };

  return (
    <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
      <h4 className="text-white font-semibold mb-2">{platform}</h4>
      <div className="flex items-center gap-2">
        <div className="flex gap-1">{renderStars()}</div>
        <span className="text-white font-medium">{rating}</span>
      </div>
    </div>
  );
};

export const CastBlock: React.FC<CastBlockProps> = ({
  title,
  members,
  icon: Icon,
}) => (
  <div className="space-y-3">
    <IconLabel icon={Icon} label={title} />
    <div className="space-y-3">
      {members.map((member, index) => (
        <div
          key={index}
          className="flex items-center gap-3 bg-gray-800/50 p-3 rounded-lg border border-gray-700">
          <div className="w-12 h-12 rounded-full bg-gray-700 overflow-hidden flex-shrink-0">
            {member.image ? (
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover"
              />
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

// Base NavigationBlock container (your existing component)
export function NavigationBlock({ className, children }: NavigationBlockProps) {
  return (
    <div
      className={cn(
        'inline-flex bg-sec border-2 border-teriary rounded-lg p-1',
        className,
      )}>
      {children}
    </div>
  );
}

// Reusable Navigation Component
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
      <Button
        variant="dark"
        onClick={handlePrevious}
        disabled={isPreviousDisabled}>
        <ChevronLeft size={20} />
      </Button>

      <Button variant="dark" onClick={handleNext} disabled={isNextDisabled}>
        <ChevronRight size={20} />
      </Button>
    </NavigationBlock>
  );
}

"use client";
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '../ui/Buttons';
import { cn } from '@/lib/utils'; // Adjust import path as needed

export const RatingBlock = () => {
  return <div className=""></div>;
};

export const ProfileBlock = () => {
  return <div className=""></div>;
};

interface NavigationBlockProps {
  className?: string;
  children?: React.ReactNode;
}


interface NavigationBlockProps {
  className?: string;
  children?: React.ReactNode;
}

interface NavigationBlockComponentProps {
  currentIndex?: number;
  totalItems?: number;
  onPrevious?: () => void;
  onNext?: () => void;
  disabled?: boolean;
  className?: string;
}

// Base NavigationBlock container (your existing component)
export function NavigationBlock({ className, children }: NavigationBlockProps) {
  return <div className={cn('inline-flex bg-sec border-2 border-teriary rounded-lg p-1', className)}>{children}</div>;
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
      <Button variant="dark" onClick={handlePrevious} disabled={isPreviousDisabled}>
        <ChevronLeft size={20} />
      </Button>

      <Button variant="dark" onClick={handleNext} disabled={isNextDisabled}>
        <ChevronRight size={20} />
      </Button>
    </NavigationBlock>
  );
}

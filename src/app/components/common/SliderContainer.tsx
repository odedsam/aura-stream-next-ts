'use client';

import React, { useState, useEffect, useRef, useImperativeHandle, forwardRef } from 'react';
import { cn } from '@/lib/utils';

interface ResponsiveSliderContainerProps {
  children: React.ReactNode[];
  // Complete freedom for mobile items
  mobileItemsVisible?: number;
  mobileItemWidth?: string; // e.g., "w-full", "w-1/2", "w-80"
  mobileGap?: string; // e.g., "gap-0", "gap-2", "gap-4"

  // Complete freedom for desktop items
  desktopItemsVisible?: number;
  desktopItemWidth?: string; // e.g., "w-1/6", "w-1/4", "w-72"
  desktopGap?: string; // e.g., "gap-4", "gap-6", "gap-8"

  // General settings
  className?: string;
  containerClass?: string;
  showIndicators?: boolean;
  indicatorsClass?: string;
  breakpoint?: number;

  // Callbacks
  onSlideChange?: (index: number) => void;
}

export interface SliderControls {
  next: () => void;
  prev: () => void;
  goTo: (index: number) => void;
  getCurrentIndex: () => number;
  canGoNext: () => boolean;
  canGoPrev: () => boolean;
}

export const ResponsiveSliderContainer = forwardRef<SliderControls, ResponsiveSliderContainerProps>(({
  children,
  mobileItemsVisible = 1,
  mobileItemWidth = "w-full",
  mobileGap = "gap-0",
  desktopItemsVisible = 6,
  desktopItemWidth = "w-1/6",
  desktopGap = "gap-4",
  className = '',
  containerClass = '',
  showIndicators = true,
  indicatorsClass = '',
  breakpoint = 768,
  onSlideChange,
}, ref) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < breakpoint);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, [breakpoint]);

  const itemsVisible = isMobile ? mobileItemsVisible : desktopItemsVisible;
  const maxIndex = Math.max(0, children.length - itemsVisible);

  const next = () => {
    const newIndex = Math.min(currentIndex + 1, maxIndex);
    setCurrentIndex(newIndex);
    onSlideChange?.(newIndex);
  };

  const prev = () => {
    const newIndex = Math.max(currentIndex - 1, 0);
    setCurrentIndex(newIndex);
    onSlideChange?.(newIndex);
  };

  const goTo = (index: number) => {
    const newIndex = Math.min(Math.max(index, 0), maxIndex);
    setCurrentIndex(newIndex);
    onSlideChange?.(newIndex);
  };

  const getCurrentIndex = () => currentIndex;
  const canGoNext = () => currentIndex < maxIndex;
  const canGoPrev = () => currentIndex > 0;

  // Expose controls via ref
  useImperativeHandle(ref, () => ({
    next,
    prev,
    goTo,
    getCurrentIndex,
    canGoNext,
    canGoPrev,
  }));

  // Dynamic classes based on mobile/desktop
  const itemWidth = isMobile ? mobileItemWidth : desktopItemWidth;
  const gap = isMobile ? mobileGap : desktopGap;

  // Calculate transform
  const getTransform = () => {
    if (isMobile && mobileItemWidth === "w-full") {
      return `translateX(-${currentIndex * 100}%)`;
    }

    // For custom widths, calculate based on item width percentage
    const itemWidthPercent = 100 / itemsVisible;
    return `translateX(-${currentIndex * itemWidthPercent}%)`;
  };

  return (
    <div className={cn("relative", className)}>
      <div className={cn("overflow-hidden", containerClass)}>
        <div
          className={cn(
            "flex transition-transform duration-300 ease-in-out",
            gap
          )}
          style={{ transform: getTransform() }}
        >
          {children.map((child, index) => (
            <div
              key={index}
              className={cn("flex-shrink-0", itemWidth)}
            >
              {child}
            </div>
          ))}
        </div>
      </div>

      {/* Indicators */}
      {showIndicators && (
        <div className={cn(
          "flex justify-center mt-4 gap-2",
          indicatorsClass
        )}>
          {Array.from({ length: Math.ceil(children.length / itemsVisible) }, (_, i) => (
            <button
              key={i}
              onClick={() => goTo(i * itemsVisible)}
              className={cn(
                "w-2 h-2 rounded-full transition-colors",
                Math.floor(currentIndex / itemsVisible) === i ? 'bg-red-500' : 'bg-gray-600'
              )}
            />
          ))}
        </div>
      )}
    </div>
  );
});

ResponsiveSliderContainer.displayName = 'ResponsiveSliderContainer';

// Simple hook for external controls
export const useSliderControls = () => {
  const sliderRef = useRef<SliderControls>(null);

  return {
    sliderRef,
    next: () => sliderRef.current?.next(),
    prev: () => sliderRef.current?.prev(),
    goTo: (index: number) => sliderRef.current?.goTo(index),
    getCurrentIndex: () => sliderRef.current?.getCurrentIndex() ?? 0,
    canGoNext: () => sliderRef.current?.canGoNext() ?? false,
    canGoPrev: () => sliderRef.current?.canGoPrev() ?? false,
  };
};

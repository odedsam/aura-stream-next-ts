import { useState, useCallback } from 'react';

export const useSlider = (total: number, visible = 1, loop = false) => {
  const [index, setIndex] = useState(0);
  const max = Math.max(0, total - visible);

  const next = useCallback(() =>
    setIndex(prev => loop ? (prev + 1) % total : Math.min(prev + 1, max)),
    [max, total, loop]
  );

  const prev = useCallback(() =>
    setIndex(prev => loop ? (prev - 1 + total) % total : Math.max(prev - 1, 0)),
    [total, loop]
  );

  const goTo = useCallback((i: number) =>
    setIndex(Math.max(0, Math.min(i, max))),
    [max]
  );

  return {
    index,
    next,
    prev,
    goTo,
    canNext: loop || index < max,
    canPrev: loop || index > 0,
  };
};

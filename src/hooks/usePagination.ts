import { useState } from 'react';

export const usePagination = (totalItems: number, itemsPerPage: number = 3) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const currentRange = {
    from: currentIndex * itemsPerPage + 1,
    to: Math.min((currentIndex + 1) * itemsPerPage, totalItems),
  };

  const getCurrentItems = <T,>(items: T[]) => {
    const start = currentIndex * itemsPerPage;
    const end = start + itemsPerPage;
    return items.slice(start, end);
  };

  return {
    currentIndex,
    setCurrentIndex,
    totalPages,
    currentRange,
    getCurrentItems,
  };
};

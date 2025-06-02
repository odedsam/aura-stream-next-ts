'use client';
import { useState, useCallback, useMemo } from 'react';

export function usePagination<T>(items: T[], itemsPerPage: number = 3) {
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = Math.ceil(items.length / itemsPerPage);

  const currentItems = useMemo(() => {
    const start = currentPage * itemsPerPage;
    return items.slice(start, start + itemsPerPage);
  }, [items, currentPage, itemsPerPage]);

  const goToPage = useCallback((page: number) => {
    if (page < 0) return setCurrentPage(0);
    if (page >= totalPages) return setCurrentPage(totalPages - 1);
    setCurrentPage(page);
  }, [totalPages]);

  return {
    currentPage,
    totalPages,
    currentItems,
    goToPage,
  };
}

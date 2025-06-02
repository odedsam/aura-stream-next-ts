'use client';

import React, { useState, createContext, useContext, ReactNode } from 'react';

type PaginationContextType = {
  currentIndex: number;
  setCurrentIndex: (index: number) => void;
  totalSlides: number;
  setTotalSlides: (count: number) => void;
};

const PaginationContext = createContext<PaginationContextType | undefined>(undefined);

export const PaginationProvider = ({ children }: { children: ReactNode }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [totalSlides, setTotalSlides] = useState(0);

  return (
    <PaginationContext.Provider value={{ currentIndex, setCurrentIndex, totalSlides, setTotalSlides }}>
      {children}
    </PaginationContext.Provider>
  );
};

export const usePagination = (): PaginationContextType => {
  const context = useContext(PaginationContext);
  if (!context) throw new Error('usePagination must be used within a PaginationProvider');
  return context;
};

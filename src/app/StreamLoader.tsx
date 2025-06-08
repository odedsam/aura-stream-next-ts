'use client';

import { useState, useEffect } from 'react';
import StreamLoader from '@/app/components/loaders/AppLoader';
import AltAppLoader from './components/loaders/AltAppLoader';

interface StreamLoaderWrapperProps {
  children: React.ReactNode;
}

export default function StreamLoaderWrapper({ children }: StreamLoaderWrapperProps) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 3500);
    return () => clearTimeout(timer);
  }, []);

  if (!loaded) {
    return <StreamLoader onLoadComplete={() => setLoaded(true)} />;
  }

  return <>{children}</>;
}

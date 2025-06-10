'use client';

import { useState, useEffect } from 'react';
import StreamingLoader from '@/app/components/loaders/AltAppLoader';

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
    return <StreamingLoader onLoadComplete={() => setLoaded(true)} />;
  }

  return <>{children}</>;
}

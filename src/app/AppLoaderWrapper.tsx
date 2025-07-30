'use client';

import { useState, useEffect } from 'react';
import AppLoader from '@/components/loaders/AppLoader';

interface AppLoaderWrapperProps {
  children: React.ReactNode;
}

export default function AppLoaderWrapper({ children }: AppLoaderWrapperProps) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 500);
    return () => clearTimeout(timer);
  }, []);

  if (!loaded) {
    return <AppLoader onLoadComplete={() => setLoaded(true)} />;
  }

  return <>{children}</>;
}

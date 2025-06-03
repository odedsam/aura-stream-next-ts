'use client';

import { useState, useEffect } from 'react';
import AppLoader from './AppLoader';

interface ClientLoaderProps {
  children: React.ReactNode;
  loadingTime?: number;
  showOnMount?: boolean;
}

export default function ClientLoader({
  children,
  loadingTime = 1500,
  showOnMount = true
}: ClientLoaderProps) {
  const [isLoading, setIsLoading] = useState(showOnMount);

  useEffect(() => {
    if (!showOnMount) return;

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, loadingTime);

    return () => clearTimeout(timer);
  }, [loadingTime, showOnMount]);

  if (isLoading) {
    return (
      <AppLoader
        brandName="LUXE"
        tagline="Crafting Premium Experiences"
        minLoadTime={loadingTime}
        onLoadComplete={() => setIsLoading(false)}
      />
    );
  }

  return <>{children}</>;
}

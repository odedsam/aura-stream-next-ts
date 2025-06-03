'use client';

import { useState, useEffect } from 'react';
import AppLoader from './AppLoader';

interface DataLoaderProps<T> {
  children: (data: T) => React.ReactNode;
  fetchData: () => Promise<T>;
  loadingMessage?: string;
  errorFallback?: (error: Error) => React.ReactNode;
}

export default function DataLoader<T>({
  children,
  fetchData,
  loadingMessage = "Loading data...",
  errorFallback
}: DataLoaderProps<T>) {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    fetchData()
      .then(setData)
      .catch(setError)
      .finally(() => setIsLoading(false));
  }, [fetchData]);

  if (error && errorFallback) {
    return errorFallback(error);
  }

  if (isLoading || !data) {
    return (
      <AppLoader
        brandName="LUXE"
        tagline={loadingMessage}
        onLoadComplete={() => setIsLoading(false)}
      />
    );
  }

  return <>{children(data)}</>;
}

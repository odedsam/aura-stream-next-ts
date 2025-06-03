'use client';

import { useEffect, useState } from 'react';

export default function AsyncComponent() {
  const [data, setData] = useState<string | null>(null);

  useEffect(() => {
    // מדמה קריאת API עם דיליי
    const timeout = setTimeout(() => {
      setData('Loaded async data!');
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  if (!data) return null;

  return <div className="text-white text-center mt-10">{data}</div>;
}

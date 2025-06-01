'use client';
import { sampleMovies } from '@/config/mock';
import { StreamVibeApp } from '../components/sections/AbouSection';
import { HeroSlider } from '../components/sliders/HeroSlider';
import CategorySection from '../components/sections/CategorySection';
import CallToAction from '../layouts/CallToAction';
import { useEffect, useState } from 'react';

export default function Page() {
  const [dataFromBackend, setDataFromBackend] = useState<any>(null); // או טיפוס ספציפי אם אתה יודע אותו
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null); // שינוי הטיפוס כאן

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/browse');
        if (!response.ok) {
          console.error('Failed to fetch data from backend');
          setError('Failed to fetch data');
          setLoading(false);
          return;
        }
        const data = await response.json();
        setDataFromBackend(data);
        setLoading(false);
        console.log('Data from backend:', data);
      } catch (error: any) {
        // הוספת טיפוס לשגיאה
        console.error('Error fetching data from backend:', error);
        setError('Error fetching data');
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>טוען נתונים...</div>;
  }

  if (error) {
    return <div>שגיאה בטעינת הנתונים: {error}</div>;
  }

  return (
    <div className="">
      <HeroSlider movies={sampleMovies} />
      <StreamVibeApp />
      <CategorySection />
      <CallToAction />
      {dataFromBackend && <pre>{JSON.stringify(dataFromBackend, null, 2)}</pre>}
    </div>
  );
}

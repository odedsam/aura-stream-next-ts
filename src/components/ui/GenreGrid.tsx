'use client';

import { useEffect, useState } from 'react';

type GenreGridProps = {
  genreId: number;
};

type TV = {
  id: number;
  name: string;
  poster_path: string;
};

export default function GenreGrid({ genreId }: GenreGridProps) {
  const [shows, setShows] = useState<TV[]>([]);

  useEffect(() => {
    fetch(`/api/discover?genre=${genreId}`)
      .then((res) => res.json())
      .then((data) =>{
        console.log("data :",data);
         setShows(data.slice(0, 4))
        });
  }, [genreId]);

  return (
    <div className="h-[50vh]">
      <main>
        <div className="grid grid-cols-2 gap-2 rounded-xl overflow-hidden">
          {shows.map((show) => (
            <img
              key={show.id}
              src={`https://image.tmdb.org/t/p/w500${show.poster_path}`}
              alt={show.name}
              className="object-cover w-full h-full aspect-[2/3] rounded-xl"
            />
          ))}
        </div>
      </main>
    </div>
  );
}

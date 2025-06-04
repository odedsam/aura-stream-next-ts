import { fetchPopularMovies, fetchPopularShows } from '@/lib/tmdb';
import Image from 'next/image';
import CallToAction from '../layouts/CallToAction';
import HeroSliderServer from '../components/common/HeroSliderServer';

export default async function BrowsePage() {
  const [movies, shows] = await Promise.all([fetchPopularMovies(), fetchPopularShows()]);

  return (
    <div>
      <HeroSliderServer />
      <div className="p-6 space-y-10">
        <section>
          <h2 className="text-2xl font-bold mb-4">Popular Movies</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {movies.map((m) => (
              <Image
                key={m.id}
                src={`https://image.tmdb.org/t/p/w500${m.poster_path}`}
                alt={m.title || ''}
                width={500}
                height={750}
                priority
              />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Popular Shows</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {shows.map((s) => (
              <Image
                key={s.id}
                src={`https://image.tmdb.org/t/p/w500${s.poster_path}`}
                alt={s.title || ''}
                width={500}
                height={750}
                priority
              />
            ))}
          </div>
        </section>
      </div>
      <CallToAction />
    </div>
  );
}

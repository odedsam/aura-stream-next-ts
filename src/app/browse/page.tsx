import { fetchPopularMovies, fetchPopularShows } from '@/lib/tmdb';
import Image from 'next/image';
import CallToAction from '@/app/layouts/CallToAction';
import HeroSliderServer from '@/app/components/common/HeroSliderServer';
import Link from 'next/link';

export default async function BrowsePage() {
  const [movies, shows] = await Promise.all([fetchPopularMovies(), fetchPopularShows()]);

  return (
    <div>
      <HeroSliderServer />
      <div className="p-6 space-y-10">
        <section>ƒ
          <h2 className="text-2xl font-bold mb-4">Popular Movies</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {movies.map((m) => (
              <Link
                key={m.id}
                href={`/browse/movies/${m.id}`}
                className="block hover:opacity-80 transition"
              >
                <Image
                  src={`https://image.tmdb.org/t/p/w500${m.poster_path}`}
                  alt={m.title || ''}
                  width={500}
                  height={750}
                  priority
                />
              </Link>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Popular Shows</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {shows.map((s) => (
              <Link
                key={s.id}
                href={`/browse/shows/${s.id}`}
                className="block hover:opacity-80 transition"
              >
                <Image
                  src={`https://image.tmdb.org/t/p/w500${s.poster_path}`}
                  alt={s.name || ''}
                  width={500}
                  height={750}
                  priority
                />
              </Link>
            ))}
          </div>
        </section>
      </div>
      <CallToAction />
    </div>
  );
}

import { fetchPopularMovies, fetchPopularShows } from '@/lib/tmdb';
import { BrowseSection } from '@/components/sections/BrowseSection';
import HeroSliderServer from '@/components/common/HeroSliderServer';
import CallToAction from '@/app/layouts/CallToAction';
import Link from 'next/link';
import Image from 'next/image';

export default async function BrowsePage() {
  const [movies, shows] = await Promise.all([fetchPopularMovies(), fetchPopularShows()]);

  return (
    <div className="w-full">
      <HeroSliderServer />
      <div className="p-6 space-y-10">
        <section className="w-full">
          <h2 className="text-2xl font-bold mb-4"></h2>
          <BrowseSection className="w-full" showCategory categoryName="Movies">
            <div className="m-6 p-6 font-manrope font-boldt text-2xl ">
              <p>Popular Movies</p>
            </div>
            <div className=" inline-grid grid-cols-2 md:grid-cols-4 gap-4 overflow-auto overflow-x-hidden snap-center mx-4">
              {movies.map((m) => (
                <Link
                  key={m.id}
                  href={`/browse/movies/${m.id}`}
                  className="block hover:opacity-80 transition">
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
          </BrowseSection>
        </section>

        <section>
          <BrowseSection className="w-full" showCategory categoryName="Shows">
            <div className="m-6 p-6 font-manrope font-boldt text-2xl ">
              <p>Popular Shows</p>
            </div>
            <div className="inline-grid grid-cols-2 md:grid-cols-4 gap-4 overflow-auto overflow-x-hidden snap-center mx-4">
              {shows.map((s) => (
                <Link
                  key={s.id}
                  href={`/browse/shows/${s.id}`}
                  className="block hover:opacity-80 transition">
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
          </BrowseSection>
        </section>
      </div>
      <CallToAction />
    </div>
  );
}

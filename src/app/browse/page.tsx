// 'use client';
// import { BrowseContainer } from '@/app/components/sections/BrowseContainer';
// import { GenreCarousel } from '@/app/components/sliders/carousels';
// import StreamVibeFAQs from '@/app/components/sections/FaqsSection';
// import HomeHero from '@/app/components/sections/HomeHero';
// import StreamVibePricing from '@/app/components/sections/pricing/PricingSection';
// import CallToAction from '@/app/layouts/CallToAction';
// import DeviceSection from '@/app/components/sections/DeviceSection';
// import { OurGenres, TopTen } from '@/config/categories';

// export default function Page() {
//   const handleSlideChange = (index: number) => {
//     console.log('Current slide index:', index);
//   };

//   return (
//     <main className="layout">
//       <HomeHero />
//       <BrowseContainer categoryName="Movies" className="p-4 rounded-lg">
//         <GenreCarousel
//           title="Explore Movie Genres"
//           items={OurGenres}
//           itemsPerSlide={5}
//           showControls={true}
//           onSlide={handleSlideChange}
//         />
//         <GenreCarousel
//           title="Our Genres"
//           items={TopTen}
//           itemsPerSlide={3}
//           onSlide={handleSlideChange}
//         />
//         <GenreCarousel
//           title="Trending Shows Now"
//           items={OurGenres}
//           itemsPerSlide={5}
//           onSlide={handleSlideChange}
//         />
//         <GenreCarousel
//           title="New Released Shows"
//           items={TopTen}
//           itemsPerSlide={5}
//           onSlide={handleSlideChange}
//         />
//       </BrowseContainer>

//       <BrowseContainer categoryName="Shows" className="p-4 rounded-lg">
//         <GenreCarousel
//           title="Must - Watch Shows"
//           items={OurGenres}
//           itemsPerSlide={5}
//           onSlide={handleSlideChange}
//         />
//       </BrowseContainer>
//       <DeviceSection />
//       <StreamVibeFAQs />
//       <StreamVibePricing />
//       <CallToAction />
//     </main>
//   );
// }

// app/browse/page.tsx
import { fetchPopularMovies, fetchPopularShows } from "@/lib/tmdb";
import HomeHero from "../components/sections/HomeHero";

export default async function BrowsePage() {
  const [movies, shows] = await Promise.all([
    fetchPopularMovies(),
    fetchPopularShows(),
  ]);

  return (
    <div>
      <HomeHero />
      <div className="p-6 space-y-10">
        <section>
          <h2 className="text-2xl font-bold mb-4">Popular Movies</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {movies.map((m) => (
              <img key={m.id} src={`https://image.tmdb.org/t/p/w500${m.poster_path}`} alt={m.title} />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Popular Shows</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {shows.map((s) => (
              <img key={s.id} src={`https://image.tmdb.org/t/p/w500${s.poster_path}`} alt={s.name} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

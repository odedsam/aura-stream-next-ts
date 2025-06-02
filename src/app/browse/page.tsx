'use client';
import { BrowseContainer } from '@/app/components/sections/BrowseContainer';
import { GenreCarousel } from '@/app/components/sliders/carousels';
import StreamVibeFAQs from '@/app/components/sections/FaqsSection';
import HomeHero from '@/app/components/sections/HomeHero';
import StreamVibePricing from '@/app/components/sections/pricing/PricingSection';
import CallToAction from '@/app/layouts/CallToAction';
import DeviceSection from '@/app/components/sections/DeviceSection';
import { actionImages,adventureImages,comedyImages,dramaImages,horrorImages } from '@/config/categories';

export default function Page() {
  const movieGenres = [
    { id: 1, title: 'Action Movies', images: actionImages.genre , description: 'High-octane thrills and excitement' },
    { id: 2, title: 'Comedy Films', images: adventureImages.genre, description: 'Laugh-out-loud entertainment' },
    { id: 3, title: 'Drama Series', images: dramaImages.genre, description: 'Emotional storytelling at its best' },
    { id: 4, title: 'Sci-Fi Adventures', images: adventureImages.genre, description: 'Explore the unknown' },
    { id: 5, title: 'Horror Thrillers', images: horrorImages.genre, description: 'Spine-chilling experiences' },
  ];

  return (
    <main className="layout">
      <HomeHero />
      <BrowseContainer categoryName="Comedy" className="p-4 rounded-lg">
        <GenreCarousel
          title="Popular Top 10 In Genres"
          items={movieGenres}
          itemsPerSlide={3}
          onSlide={(index) => console.log('Movie slide:', index)}
        />
        <GenreCarousel title="Our Genres" items={movieGenres} itemsPerSlide={3} onSlide={(index) => console.log('Movie slide:', index)} />
      </BrowseContainer>
      <DeviceSection />
      <StreamVibeFAQs />
      <StreamVibePricing />
      <CallToAction />
    </main>
  );
}

'use client';
import { BrowseContainer } from './components/sections/BrowseContainer';
import { GenreCarousel } from './components/sliders/carousels';
import { OurGenres, TopTen } from '@/config/categories';

import AuraStreamFAQs from './components/sections/FaqsSection';
import HomeHero from '@/app/components/sections/HomeHero';
import AuraStreamPricing from './components/sections/pricing/PricingSection';
import CallToAction from './layouts/CallToAction';
import DeviceSection from './components/sections/DeviceSection';
import TestHero from './components/sections/HomeHero';

export default function Page() {
  const handleSlideChange = (index: number) => {
    console.log('Current slide index:', index);
  };

  return (
    <main className="layout">
      <TestHero />
      <BrowseContainer categoryName="Comedy" className="p-4 rounded-lg">
        <GenreCarousel
          title="Explore Movie Genres"
          items={OurGenres}
          itemsPerSlide={5}
          showControls={true}
          onSlide={handleSlideChange}
        />
        <GenreCarousel
          title="Our Genres"
          items={TopTen}
          itemsPerSlide={5}
          onSlide={(index) => console.log('Movie slide:', index)}
        />
        <GenreCarousel
          title="Trending Shows Now"
          items={OurGenres}
          itemsPerSlide={5}
          onSlide={(index) => console.log('Movie slide:', index)}
        />
        <GenreCarousel
          title="New Released Shows"
          items={TopTen}
          itemsPerSlide={5}
          onSlide={(index) => console.log('Movie slide:', index)}
        />
      </BrowseContainer>
      <BrowseContainer categoryName="Comedy" className="p-4 rounded-lg">
        <GenreCarousel
          title="Must - Watch Shows"
          items={OurGenres}
          itemsPerSlide={5}
          onSlide={(index) => console.log('Movie slide:', index)}
        />
      </BrowseContainer>
      <DeviceSection />
      <AuraStreamFAQs />
      <AuraStreamPricing />
      <CallToAction />
    </main>
  );
}

'use client';
import { BrowseContainer } from '@/app/components/sections/BrowseContainer';
import { GenreCarousel } from '@/app/components/sliders/carousels';
import StreamVibeFAQs from '@/app/components/sections/FaqsSection';
import HomeHero from '@/app/components/sections/HomeHero';
import StreamVibePricing from '@/app/components/sections/pricing/PricingSection';
import CallToAction from '@/app/layouts/CallToAction';
import DeviceSection from '@/app/components/sections/DeviceSection';
import { OurGenres, TopTen } from '@/config/categories';

export default function Page() {
  const handleSlideChange = (index: number) => {
    console.log('Current slide index:', index);
  };

  return (
    <main className="layout">
      <HomeHero />
      <BrowseContainer categoryName="Movies" className="p-4 rounded-lg">
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
          itemsPerSlide={3}
          onSlide={handleSlideChange}
        />
        <GenreCarousel
          title="Trending Shows Now"
          items={OurGenres}
          itemsPerSlide={5}
          onSlide={handleSlideChange}
        />
        <GenreCarousel
          title="New Released Shows"
          items={TopTen}
          itemsPerSlide={5}
          onSlide={handleSlideChange}
        />
      </BrowseContainer>

      <BrowseContainer categoryName="Shows" className="p-4 rounded-lg">
        <GenreCarousel
          title="Must - Watch Shows"
          items={OurGenres}
          itemsPerSlide={5}
          onSlide={handleSlideChange}
        />
      </BrowseContainer>
      <DeviceSection />
      <StreamVibeFAQs />
      <StreamVibePricing />
      <CallToAction />
    </main>
  );
}

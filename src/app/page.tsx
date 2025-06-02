'use client';
import { BrowseContainer } from './components/sections/BrowseContainer';
import { GenreCarousel } from './components/sliders/carousels';
import { actionImages, adventureImages, comedyImages, dramaImages, horrorImages } from '@/config/categories';

import StreamVibeFAQs from './components/sections/FaqsSection';
import HomeHero from '@/app/components/sections/HomeHero';
import StreamVibePricing from './components/sections/pricing/PricingSection';
import CallToAction from './layouts/CallToAction';
import DeviceSection from './components/sections/DeviceSection';

const OurGenres: any[] = [
  { id: 1, title: 'Action', images: actionImages.genre, description: 'High-octane thrills and excitement' },
  { id: 4, title: 'Adventures', images: adventureImages.genre, description: 'Explore the unknown' },
  { id: 2, title: 'Comedy', images: comedyImages.genre, description: 'Laugh-out-loud entertainment' },
  { id: 3, title: 'Drama', images: dramaImages.genre, description: 'Emotional storytelling at its best' },
  { id: 5, title: 'Horror', images: horrorImages.genre, description: 'Spine-chilling experiences' },
];
const TopTen: any[] = [
  { id: 5, title: 'Action', images: actionImages.top_ten, description: 'High-octane thrills and excitement', isTopTen: true },
  { id: 6, title: 'Adventures', images: adventureImages.top_ten, description: 'Explore the unknown', isTopTen: true },
  { id: 7, title: 'Comedy', images: comedyImages.top_ten, description: 'Laugh-out-loud entertainment', isTopTen: true },
  { id: 8, title: 'Drama', images: dramaImages.top_ten, description: 'Emotional storytelling at its best', isTopTen: true },
  { id: 9, title: 'Horror', images: horrorImages.top_ten, description: 'Spine-chilling experiences', isTopTen: true },
];

export default function Page() {
  const handleSlideChange = (index: number) => {
    console.log('Current slide index:', index);
  };

  return (
    <main className="layout">
      <HomeHero />
      <BrowseContainer categoryName="Comedy" className="p-4 rounded-lg">
        <GenreCarousel title="Explore Movie Genres" items={OurGenres} itemsPerSlide={5} showControls={true} onSlide={handleSlideChange} />
        <GenreCarousel title="Our Genres" items={TopTen} itemsPerSlide={5} onSlide={(index) => console.log('Movie slide:', index)} />
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
      <StreamVibeFAQs />
      <StreamVibePricing />
      <CallToAction />
    </main>
  );
}

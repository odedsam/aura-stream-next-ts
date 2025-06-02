'use client';
import { BrowseContainer } from '@/app/components/sections/BrowseContainer';
import { GenreCarousel } from '@/app/components/sliders/carousels';
import StreamVibeFAQs from '@/app/components/sections/FaqsSection';
import HomeHero from '@/app/components/sections/HomeHero';
import StreamVibePricing from '@/app/components/sections/pricing/PricingSection';
import CallToAction from '@/app/layouts/CallToAction';
import DeviceSection from '@/app/components/sections/DeviceSection';
import { actionImages, adventureImages, comedyImages, dramaImages, horrorImages } from '@/config/categories';

const OurGenres: any[] = [
  { id: 1, title: 'Action', images: actionImages.genre, description: 'High-octane thrills and excitement' },
  { id: 4, title: 'Adventures', images: adventureImages.genre, description: 'Explore the unknown' },
  { id: 2, title: 'Comedy', images: comedyImages.genre, description: 'Laugh-out-loud entertainment' },
  { id: 3, title: 'Drama', images: dramaImages.genre, description: 'Emotional storytelling at its best' },
  { id: 5, title: 'Horror', images: horrorImages.genre, description: 'Spine-chilling experiences' },
];
const TopTen: any[] = [
  { id: 1, title: 'Action', images: actionImages.top_ten, description: 'High-octane thrills and excitement', isTopTen: true },
  { id: 4, title: 'Adventures', images: adventureImages.top_ten, description: 'Explore the unknown', isTopTen: true },
  { id: 2, title: 'Comedy', images: comedyImages.top_ten, description: 'Laugh-out-loud entertainment', isTopTen: true },
  { id: 3, title: 'Drama', images: dramaImages.top_ten, description: 'Emotional storytelling at its best', isTopTen: true },
  { id: 5, title: 'Horror', images: horrorImages.top_ten, description: 'Spine-chilling experiences', isTopTen: true },
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
        <GenreCarousel title="Our Genres" items={OurGenres} itemsPerSlide={3} onSlide={(index) => console.log('Movie slide:', index)} />
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

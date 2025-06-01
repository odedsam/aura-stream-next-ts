'use client';
import { sampleMovies } from '@/config/mock';
import { StreamVibeApp } from '../components/sections/AbouSection';
import { HeroSlider } from '../components/sliders/HeroSlider';
import CategorySection from '../components/sections/CategorySection';
import CallToAction from '../layouts/CallToAction';
import { GenreCarousel } from '../components/sliders/carousels';
import { BrowseContainer } from '../components/sections/BrowseContainer';

export default function Page() {
  const movieGenres = [
    { id: 1, title: 'Action Movies', image: '/action.jpg', description: 'High-octane thrills and excitement' },
    { id: 2, title: 'Comedy Films', image: '/comedy.jpg', description: 'Laugh-out-loud entertainment' },
    { id: 3, title: 'Drama Series', image: '/drama.jpg', description: 'Emotional storytelling at its best' },
    { id: 4, title: 'Sci-Fi Adventures', image: '/scifi.jpg', description: 'Explore the unknown' },
    { id: 5, title: 'Horror Thrillers', image: '/horror.jpg', description: 'Spine-chilling experiences' },
    { id: 6, title: 'Romance Stories', image: '/romance.jpg', description: 'Heartwarming love stories' },
  ];

  return (
    <div className="">
      <HeroSlider movies={sampleMovies} />
      <StreamVibeApp />
      <CategorySection />

      <BrowseContainer categoryName="Comedy" className="p-4 rounded-lg" categoryClassName="bg-yellow-500 text-black font-semibold">
        <GenreCarousel
          title="Popular Movie Genres"
          items={movieGenres}
          itemsPerSlide={3}
          onSlide={(index) => console.log('Movie slide:', index)}
        />
      </BrowseContainer>

      <CallToAction />
    </div>
  );
}

'use client';
import { sampleMovies } from '@/config/mock';
import { HeroSlider } from '../components/sliders/HeroSlider';
import { GenreCarousel } from '../components/sliders/carousels';
import { BrowseContainer } from '../components/sections/BrowseContainer';
import CallToAction from '../layouts/CallToAction';

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
      {/* <CategorySection /> */}

      <BrowseContainer categoryName="Comedy" className="p-4 rounded-lg">
        <GenreCarousel
          title="Popular Top 10 In Genres"
          items={movieGenres}
          itemsPerSlide={3}
          onSlide={(index) => console.log('Movie slide:', index)}
        />
        <GenreCarousel title="Our Genres" items={movieGenres} itemsPerSlide={3} onSlide={(index) => console.log('Movie slide:', index)} />
        <GenreCarousel
          title="Trending Shows Now"
          items={movieGenres}
          itemsPerSlide={3}
          onSlide={(index) => console.log('Movie slide:', index)}
        />
        <GenreCarousel
          title="New Released Shows"
          items={movieGenres}
          itemsPerSlide={3}
          onSlide={(index) => console.log('Movie slide:', index)}
        />
      </BrowseContainer>
      <BrowseContainer categoryName="Comedy" className="p-4 rounded-lg">
        <GenreCarousel
          title="Must - Watch Shows"
          items={movieGenres}
          itemsPerSlide={3}
          onSlide={(index) => console.log('Movie slide:', index)}
        />
      </BrowseContainer>

      <CallToAction />
    </div>
  );
}

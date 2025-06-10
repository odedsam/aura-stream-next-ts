import HeroSliderClient from '@/app/components/common/HeroSliderClient';

type MovieClient = {
  id: number;
  title: string;
  description: string;
  image: string;
  trailerKey: string | null;
};

interface SingleMovieHeroProps {
  id: string;
  title: string;
  name?: string;
  overview: string;
  backdrop_path: string | null;
  trailerKey: string | null;
}

const SingleMovieHero = ({
  id,
  title,
  name,
  overview,
  backdrop_path,
  trailerKey,
}: SingleMovieHeroProps) => {
  const movieForClient: MovieClient = {
    id: parseInt(id),
    title: title || name || 'Untitled',
    description: overview,
    image: backdrop_path
      ? `https://image.tmdb.org/t/p/original${backdrop_path}`
      : '/placeholder.png',
    trailerKey: trailerKey,
  };

  return <HeroSliderClient movies={[movieForClient]} autoSlide={false} />;
};

export default SingleMovieHero;

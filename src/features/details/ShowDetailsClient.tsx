'use client';

import GenreCredits from '@/features/details/GenreCredits';
import SeasonsAndEpisodes from '@/features/details/ShowDetails';

interface ShowDetailsClientProps {
  seasons: any[];
  currentSeason: number;
  showId: string;
  release_date?: string;
  spoken_languages?: { name: string }[];
  genres?: { id: number; name: string }[];
  vote_average?: number;
  personas?: any[];
}

const ShowDetailsClient = ({
  seasons,
  currentSeason,
  showId,
  release_date = 'Unknown',
  spoken_languages = [{ name: 'EN' }],
  genres = [],
  vote_average = 0,
  personas = [],
}: ShowDetailsClientProps) => {
  return (
    <div className="container mx-auto px-4 py-8">
      {seasons.length > 0 && (
        <SeasonsAndEpisodes
          seasons={seasons}
          currentSeason={currentSeason}
          showId={showId}
        />
      )}

      <GenreCredits
        release_date={release_date}
        spoken_languages={spoken_languages}
        genres={genres}
        vote_average={vote_average / 2}
        personas={personas}
      />
    </div>
  );
};

export default ShowDetailsClient;

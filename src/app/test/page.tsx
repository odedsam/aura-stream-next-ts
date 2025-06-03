// 'use client';
// import SeasonsAndEpisodes from '@/features/details/ShowDetails';
// import GenreDetailsSidebar from '@/features/details/GenreDetailsSidebar';
// import { seasonsEpisodesMock } from '@/config/mock';

import { seasonsEpisodesMock } from '@/config/mock';
import GenreDetailsSidebar from '@/features/details/GenreDetailsSidebar';
import MovieDetails from '@/features/details/MovieDetails';
import SeasonsAndEpisodes from '@/features/details/ShowDetails';

// export default function page() {
//   const handleEpisodePlay = (seasonId: string, episodeId: string) => {
//     alert(`Playing Season ${seasonId}, Episode ${episodeId}`);
//   };
//   return (
//     <div className="my-24">
//       <GenreDetailsSidebar />
//       <SeasonsAndEpisodes
//         seasons={seasonsEpisodesMock}
//         currentSeason={1}
//         onEpisodePlay={handleEpisodePlay}
//       />
//     </div>
//   );
// }

export default function page() {
  return (
    <div className="">
      <MovieDetails />
    </div>
  );
}

// 'use client';
// import SeasonsAndEpisodes from '@/features/details/ShowDetails';
// import GenreDetailsSidebar from '@/features/details/GenreDetailsSidebar';
// import { seasonsEpisodesMock } from '@/config/mock';
'use client';
import { seasonsEpisodesMock } from '@/config/mock';
import GenreDetailsSidebar from '@/features/details/GenreDetailsSidebar';
import MovieDetails from '@/features/details/MovieDetails';
import SeasonsAndEpisodes from '@/features/details/ShowDetails';
import MovRev from '../components/sections/MovRev';
import { castMembers, reviews } from '@/lib/collections';

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
  const onAddReview = () => {
    console.log('review added');
  };
  const desc =
    'When a young boy vanishes, a small town uncovers a mystery involving secret experiments,terrifying supernatural forces and one strange little girl.';
  return (
    <div className="">
      <MovRev description={desc} cast={castMembers} reviews={reviews} onAddReview={onAddReview} />
      <MovieDetails />
    </div>
  );
}

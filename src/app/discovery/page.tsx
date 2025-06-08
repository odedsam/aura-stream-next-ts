import GenreGrid from '../components/ui/GenreGrid';

export default async function DiscoverPage() {
  const genreIds = [
    { id: 28, label: 'Action' },
    { id: 12, label: 'Adventure' },
    { id: 35, label: 'Comedy' },
    { id: 18, label: 'Drama' },
    { id: 27, label: 'Horror' },
  ];

  return (
    <div className="space-y-6 p-6">
      {genreIds.map(({ id, label }) => (
        <div key={id}>
          <h2 className="text-xl font-bold mb-2">{label}</h2>
          <GenreGrid genreId={id} />
        </div>
      ))}
    </div>
  );
}

// import GenreGridServer from '@/app/new/GenreGridServer';
// import ListSliderServer from '../new/ListSliderServer';
// import { formatResults } from '@/lib/utils';
// import { GenreCarousel } from '../components/sliders/carousels';

// export default async function DiscoverPage() {
// const [
//   movieGenresRes,
//   moviePopularRes,
//   movieTrendingRes,
//   movieNowPlayingRes,
//   movieTopRatedRes,
//   tvGenresRes,
//   tvPopularRes,
//   tvTrendingRes,
//   tvOnAirRes,
//   tvTopRatedRes,
// ] = await Promise.all([
//   fetch('https://api.themoviedb.org/3/genre/movie/list', {
//     headers: { Authorization: `Bearer ${process.env.TMDB_ACCESS_TOKEN}` },
//   }),
//   fetch('https://api.themoviedb.org/3/movie/popular', {
//     headers: { Authorization: `Bearer ${process.env.TMDB_ACCESS_TOKEN}` },
//   }),
//   fetch('https://api.themoviedb.org/3/trending/movie/day', {
//     headers: { Authorization: `Bearer ${process.env.TMDB_ACCESS_TOKEN}` },
//   }),
//   fetch('https://api.themoviedb.org/3/movie/now_playing', {
//     headers: { Authorization: `Bearer ${process.env.TMDB_ACCESS_TOKEN}` },
//   }),
//   fetch('https://api.themoviedb.org/3/movie/top_rated', {
//     headers: { Authorization: `Bearer ${process.env.TMDB_ACCESS_TOKEN}` },
//   }),
//   fetch('https://api.themoviedb.org/3/genre/tv/list', {
//     headers: { Authorization: `Bearer ${process.env.TMDB_ACCESS_TOKEN}` },
//   }),
//   fetch('https://api.themoviedb.org/3/tv/popular', {
//     headers: { Authorization: `Bearer ${process.env.TMDB_ACCESS_TOKEN}` },
//   }),
//   fetch('https://api.themoviedb.org/3/trending/tv/day', {
//     headers: { Authorization: `Bearer ${process.env.TMDB_ACCESS_TOKEN}` },
//   }),
//   fetch('https://api.themoviedb.org/3/tv/on_the_air', {
//     headers: { Authorization: `Bearer ${process.env.TMDB_ACCESS_TOKEN}` },
//   }),
//   fetch('https://api.themoviedb.org/3/tv/top_rated', {
//     headers: { Authorization: `Bearer ${process.env.TMDB_ACCESS_TOKEN}` },
//   }),
// ]);

// const [movieGenres, moviePopular, movieTrending, movieNowPlaying, movieTopRated] =
//   await Promise.all([
//     movieGenresRes.json(),
//     moviePopularRes.json(),
//     movieTrendingRes.json(),
//     movieNowPlayingRes.json(),
//     movieTopRatedRes.json(),
//   ]);
// const [tvGenres, tvPopular, tvTrending, tvOnAir, tvTopRated] = await Promise.all([
//   tvGenresRes.json(),
//   tvPopularRes.json(),
//   tvTrendingRes.json(),
//   tvOnAirRes.json(),
//   tvTopRatedRes.json(),
// ]);

//   return (
//     <div className="space-y-10 px-6 py-8">
//       <h1 className="text-2xl font-bold">Movies</h1>
//       <GenreGridServer genres={movieGenres.genres} isMovie />
//       <ListSliderServer
//         title="Popular Top 10 in Movies"
//         items={formatResults(moviePopular.results)}
//       />
//       <GenreCarousel
//         title="Popular Top 10 in Movies"
//         items={formatResults(moviePopular.results)}
//         itemsPerSlide={5}
//       />

//       <ListSliderServer title="Trending Now" items={movieTrending.results.slice(0, 10)} />
//       <ListSliderServer title="New Releases" items={movieNowPlaying.results.slice(0, 10)} />
//       <ListSliderServer title="Must Watch – Movies" items={movieTopRated.results.slice(0, 10)} />

//       <h1 className="text-2xl font-bold mt-12">TV Shows</h1>
//       <GenreGridServer genres={tvGenres.genres} isMovie={false} />
//       <ListSliderServer title="Popular Top 10 in Shows" items={tvPopular.results.slice(0, 10)} />
//       <ListSliderServer title="Trending Now" items={tvTrending.results.slice(0, 10)} />
//       <ListSliderServer title="New Releases" items={tvOnAir.results.slice(0, 10)} />
//       <ListSliderServer title="Must Watch – Shows" items={tvTopRated.results.slice(0, 10)} />
//     </div>
//   );
// }

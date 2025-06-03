import { fetchMovieById } from "@/lib/tmdb";

export default async function MoviePage({ params }: { params: { id: string } }) {
  const movie = await fetchMovieById(params.id);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">{movie.title}</h1>
      <img className="w-64 mt-4" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
      <p className="mt-4 text-gray-700">{movie.overview}</p>
    </div>
  );
}

import { fetchShowById } from "@/lib/tmdb";

export default async function ShowPage({ params }: { params: { id: string } }) {
  const show = await fetchShowById(params.id);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">{show.name}</h1>
      <img className="w-64 mt-4" src={`https://image.tmdb.org/t/p/w500${show.poster_path}`} alt={show.name} />
      <p className="mt-4 text-gray-700">{show.overview}</p>
    </div>
  );
}

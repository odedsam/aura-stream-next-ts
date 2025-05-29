import { notFound } from 'next/navigation'

type Movie = {
  id: string
  title: string
  description: string
}

async function fetchMovie(id: string): Promise<Movie | null> {
  const res = await fetch(`https://api.example.com/movies/${id}`, {
    cache: 'no-store', // Full SSR
  })
  if (!res.ok) return null
  return res.json()
}

export async function generateMetadata({ params }: { params: { id: string } }) {
  const movie = await fetchMovie(params.id)
  return {
    title: movie?.title || 'Movie',
  }
}

export default async function MoviePage({ params }: { params: { id: string } }) {
  const movie = await fetchMovie(params.id)
  if (!movie) notFound()

  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold">{movie.title}</h1>
      <p className="mt-2 text-gray-700">{movie.description}</p>
    </main>
  )
}

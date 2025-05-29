import { notFound } from 'next/navigation'

type Show = {
  id: string
  name: string
  summary: string
}

async function fetchShow(id: string): Promise<Show | null> {
  const res = await fetch(`https://api.example.com/shows/${id}`, {
    cache: 'no-store',
  })
  if (!res.ok) return null
  return res.json()
}

export async function generateMetadata({ params }: { params: { id: string } }) {
  const show = await fetchShow(params.id)
  return {
    title: show?.name || 'Show',
  }
}

export default async function page({ params }: { params: { id: string } }) {
  const show = await fetchShow(params.id)
  if (!show) notFound()

  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold">{show.name}</h1>
      <p className="mt-2 text-gray-700">{show.summary}</p>
    </main>
  )
}


import React from 'react'
import TvShowList from '@/features/tv-shows/components/TvShowList'

export default function Page() {
  return (
    <main className="max-w-3xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8">Stream Vibe</h1>
      <TvShowList />
    </main>
  )
}

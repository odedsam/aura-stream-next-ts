'use client'

import React, { useState } from 'react'
import { useTvShows, useAddTvShow } from '../hooks/useTvShows'

export default function TvShowList() {
  const { data, error, isLoading } = useTvShows()
  const addShow = useAddTvShow()
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error loading shows</div>

  const handleAdd = () => {
    if (!title.trim()) return
    addShow.mutate({ title, description })
    setTitle('')
    setDescription('')
  }

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">TV Shows</h2>
      <div className="mb-6">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border p-2 mr-2 rounded"
        />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="border p-2 mr-2 rounded"
        />
        <button
          onClick={handleAdd}
          disabled={addShow.status === 'loading'} // <-- פה התיקון
          className="bg-blue-600 text-white px-4 py-2 rounded disabled:opacity-50"
        >
          Add Show
        </button>
      </div>
      <ul>
        {data?.map((show) => (
          <li key={show.id} className="mb-3 border-b pb-2">
            <h3 className="font-bold">{show.title}</h3>
            <p>{show.description}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

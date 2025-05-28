import { useQuery, useMutation, useQueryClient, UseMutationResult } from '@tanstack/react-query'

type TvShow = {
  id: number
  title: string
  description?: string
}

export function useTvShows() {
  return useQuery<TvShow[], Error>({
    queryKey: ['tv-shows'],
    queryFn: async () => {
      const res = await fetch('/api/tv-shows')
      if (!res.ok) throw new Error('Failed to fetch')
      return res.json()
    },
  })
}

export function useAddTvShow(): UseMutationResult<
  TvShow,
  Error,
  { title: string; description?: string }
> {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: async (newShow) => {
      const res = await fetch('/api/tv-shows', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newShow),
      })
      if (!res.ok) throw new Error('Failed to add')
      return res.json()
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['tv-shows'] })
    },
  })
}

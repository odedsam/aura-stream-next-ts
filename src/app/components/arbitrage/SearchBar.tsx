'use client';
import { useState, useEffect, useMemo } from 'react';
import { useDebouncedValue } from '@/hooks/useDebounceValue';

interface SearchResult {
  type: string;
  id: string;
  title: string;
  description: string;
  score: number;
}

export default function SearchBar() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [loading, setLoading] = useState(false);

  const debouncedQuery = useDebouncedValue(query, 300);

  useEffect(() => {
    if (debouncedQuery.length < 2) {
      setResults([]);
      return;
    }

    const searchShows = async () => {
      setLoading(true);
      try {
        const response = await fetch(`/api/search?q=${encodeURIComponent(debouncedQuery)}&limit=10`);
        const data = await response.json();
        setResults(data.results || []);
      } catch (error) {
        console.error('Search failed:', error);
        setResults([]);
      } finally {
        setLoading(false);
      }
    };

    searchShows();
  }, [debouncedQuery]);

  return (
    <div className="relative">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search shows, episodes..."
        className="w-full p-3 border rounded-lg"
      />

      {loading && <div className="absolute top-full mt-1 text-sm text-gray-500">Searching...</div>}

      {results.length > 0 && (
        <div className="absolute top-full mt-1 w-full bg-white border rounded-lg shadow-lg max-h-96 overflow-y-auto z-50">
          {results.map((result) => (
            <div key={result.id} className="p-3 hover:bg-gray-50 border-b cursor-pointer">
              <div className="font-semibold">{result.title}</div>
              <div className="text-sm text-gray-600 truncate">{result.description}</div>
              <div className="text-xs text-gray-400">{result.type}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

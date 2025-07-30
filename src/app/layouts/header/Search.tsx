'use client';

import { Search, X } from 'lucide-react';
import { useRef, useEffect } from 'react';
import { useDebounce } from '@/hooks/useDebounce';
import { useSearchTerm, useSetSearchTerm, useIsSearchOpen, useToggleSearch } from '@/app/store/uiStore';






const SearchComponent: React.FC = () => {
  const searchTerm = useSearchTerm();
  const setSearchTerm = useSetSearchTerm();
  const isSearchOpen = useIsSearchOpen();
  const toggleSearch = useToggleSearch();
  const inputRef = useRef<HTMLInputElement>(null);

  const debouncedSearchTerm = useDebounce(searchTerm, 400);

  useEffect(() => {
    if (isSearchOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isSearchOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isSearchOpen) {
        toggleSearch();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isSearchOpen, toggleSearch]);

  // Debounced search logic
  useEffect(() => {
    if (debouncedSearchTerm.trim()) {
      console.log('Debounced search for:', debouncedSearchTerm);
      // TODO: Trigger your API call or search filtering here
    }
  }, [debouncedSearchTerm]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      console.log('Immediate search on submit:', searchTerm);
      // You can add your search navigation logic here
    }
  };

  const handleClear = () => {
    setSearchTerm('');
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleClose = () => {
    toggleSearch();
    setSearchTerm('');
  };

  return (
    <div className="relative">
      {/* Search Button */}
      <button
        onClick={toggleSearch}
        className="cursor-pointer p-2 text-gray-300 hover:text-white transition-colors duration-200"
        aria-label="Open search">
        <Search className="w-5 h-5" />
      </button>

      {/* Search Overlay */}
      {isSearchOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm">
          <div className="container mx-auto px-4 pt-20">
            <div className="max-w-2xl mx-auto">
              <form onSubmit={handleSubmit} className="relative">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-def w-5 h-5" />
                  <input
                    ref={inputRef}
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search movies, TV shows, actors..."
                    className="w-full bg-gray-900/90 border border-gray-700 rounded-lg pl-12 pr-20 py-4 text-white placeholder-gray-def focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600"
                  />
                  <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center space-x-2">
                    {searchTerm && (
                      <button
                        type="button"
                        onClick={handleClear}
                        className="p-1 text-gray-def hover:text-white transition-colors"
                        aria-label="Clear search">
                        <X className="w-4 h-4 cursor-pointer " />
                      </button>
                    )}
                    <button
                      type="button"
                      onClick={handleClose}
                      className="cursor-pointer p-2 text-gray-def hover:text-white transition-colors"
                      aria-label="Close search">
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </form>

              {/* Search Results Preview */}
              {debouncedSearchTerm && (
                <div className="mt-4 bg-gray-900/90 border border-gray-700 rounded-lg p-4">
                  <div className="text-gray-def text-sm mb-2">
                    Showing results for: "<span className="text-white">{debouncedSearchTerm}</span>"
                  </div>
                  {/* You can add search suggestions/results here */}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchComponent;

// app/store/searchStore.ts
import { create } from 'zustand';

interface SearchState {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  isSearchOpen: boolean;
  toggleSearch: () => void;
}

export const useSearchStore = create<SearchState>()((set) => ({
  searchTerm: '',
  setSearchTerm: (term) => set({ searchTerm: term }),
  isSearchOpen: false,
  toggleSearch: () => set((state) => ({ isSearchOpen: !state.isSearchOpen })),
}));

export const useSearchTerm = () => useSearchStore((state) => state.searchTerm);
export const useSetSearchTerm = () => useSearchStore((state) => state.setSearchTerm);
export const useIsSearchOpen = () => useSearchStore((state) => state.isSearchOpen);
export const useToggleSearch = () => useSearchStore((state) => state.toggleSearch);

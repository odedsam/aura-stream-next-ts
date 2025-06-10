import { create } from "zustand";

export interface Movie {
  id: number;
  title: string;
  description: string;
  image: string;
  trailerKey: string | null;
}

export interface CollectionState {
  favorites: Movie[];
  saved: Movie[];
  setFavorites: (items: Movie[]) => void;
  setSaved: (items: Movie[]) => void;
  addFavorite: (movie: Movie) => void;
  removeFavorite: (id: number) => void;
  addSaved: (movie: Movie) => void;
  removeSaved: (id: number) => void;
}

export const useCollectionStore = create<CollectionState>((set) => ({
  favorites: [],
  saved: [],

  setFavorites: (items) => set(() => ({ favorites: items })),
  setSaved: (items) => set(() => ({ saved: items })),

  addFavorite: (movie) =>
    set((state) => ({
      favorites: state.favorites.find((m) => m.id === movie.id)
        ? state.favorites
        : [...state.favorites, movie],
    })),
  removeFavorite: (id) =>
    set((state) => ({
      favorites: state.favorites.filter((m) => m.id !== id),
    })),

  addSaved: (movie) =>
    set((state) => ({
      saved: state.saved.find((m) => m.id === movie.id)
        ? state.saved
        : [...state.saved, movie],
    })),
  removeSaved: (id) =>
    set((state) => ({
      saved: state.saved.filter((m) => m.id !== id),
    })),
}));

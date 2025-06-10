import { create } from "zustand";

export interface CollectionState {
  favorites: number[]; // movieId or showId
  saved: number[];     // movieId or showId
  setFavorites: (items: number[]) => void;
  setSaved: (items: number[]) => void;
  addFavorite: (id: number) => void;
  removeFavorite: (id: number) => void;
  addSaved: (id: number) => void;
  removeSaved: (id: number) => void;
}

export const useCollectionStore = create<CollectionState>((set) => ({
  favorites: [],
  saved: [],

  setFavorites: (items) => set(() => ({ favorites: items })),
  setSaved: (items) => set(() => ({ saved: items })),

  addFavorite: (id) =>
    set((state) => ({
      favorites: state.favorites.includes(id) ? state.favorites : [...state.favorites, id],
    })),
  removeFavorite: (id) =>
    set((state) => ({
      favorites: state.favorites.filter((fav) => fav !== id),
    })),
  addSaved: (id) =>
    set((state) => ({
      saved: state.saved.includes(id) ? state.saved : [...state.saved, id],
    })),
  removeSaved: (id) =>
    set((state) => ({
      saved: state.saved.filter((s) => s !== id),
    })),
}));

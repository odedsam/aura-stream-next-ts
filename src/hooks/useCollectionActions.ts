import type { Movie } from '@/app/store/useCollectionStore';
import { useCollectionStore } from '@/app/store/useCollectionStore';
import { api } from '@/lib/db/api';

export const useCollectionActions = () => {
  const {
    favorites,
    saved,
    setFavorites,
    setSaved,
    addFavorite,
    removeFavorite,
    addSaved,
    removeSaved,
  } = useCollectionStore();

  const loadCollections = async (userId: string | null) => {
    if (!userId) {
      const localFavorites = localStorage.getItem('favorites');
      const localSaved = localStorage.getItem('saved');

      setFavorites(localFavorites ? (JSON.parse(localFavorites) as Movie[]) : []);
      setSaved(localSaved ? (JSON.parse(localSaved) as Movie[]) : []);
      return;
    }

    try {
      const { favorites: dbFavorites, saved: dbSaved } = await api.getCollections(userId);
      setFavorites(dbFavorites);
      setSaved(dbSaved);
    } catch (error) {
      console.error('Failed to load collections:', error);
    }
  };

  const syncCollections = async (userId: string | null) => {
    if (!userId) {
      localStorage.setItem('favorites', JSON.stringify(favorites));
      localStorage.setItem('saved', JSON.stringify(saved));
      return;
    }

    try {
      await Promise.all([
        api.updateFavorites(userId, favorites as any[]),
        api.updateSaved(userId, saved as any[]),
      ]);
    } catch (error) {
      console.error('Failed to sync collections:', error);
    }
  };

  return {
    favorites,
    saved,
    addFavorite,
    removeFavorite,
    addSaved,
    removeSaved,
    loadCollections,
    syncCollections,
  };
};

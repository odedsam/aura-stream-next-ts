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
      // Load from localStorage guest
      const fav = localStorage.getItem('favorites');
      const saved = localStorage.getItem('saved');
      setFavorites(fav ? JSON.parse(fav) : []);
      setSaved(saved ? JSON.parse(saved) : []);
      return;
    }
    // Load from DB
    const { favorites, saved } = await api.getCollections(userId);
    setFavorites(favorites);
    setSaved(saved);
  };

  const syncCollections = async (userId: string | null) => {
    if (!userId) {
      // Save to localStorage guest
      localStorage.setItem('favorites', JSON.stringify(favorites));
      localStorage.setItem('saved', JSON.stringify(saved));
      return;
    }
    // Save to DB
    await api.updateFavorites(userId, favorites);
    await api.updateSaved(userId, saved);
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

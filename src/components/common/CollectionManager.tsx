import { useCollectionActions } from '@/hooks/useCollectionActions';
import { useEffect } from 'react';

type Props = {
  userId: string | null; // null if guest
};

export default function CollectionManager({ userId }: Props) {
  const {
    favorites,
    saved,
    addFavorite,
    removeFavorite,
    addSaved,
    removeSaved,
    loadCollections,
    syncCollections,
  } = useCollectionActions();

  // Load data on mount or userId change
  useEffect(() => {
    loadCollections(userId);
  }, [userId]);

  // Sync data on favorites or saved change
  useEffect(() => {
    syncCollections(userId);
  }, [favorites, saved]);

  // Example UI triggers (replace with real UI)
  const handleAddFavorite = (item: any) => {
    addFavorite(item);
  };

  const handleRemoveFavorite = (itemId: string | number) => {
    removeFavorite(itemId as number);
  };

  const handleAddSaved = (item: any) => {
    addSaved(item);
  };

  const handleRemoveSaved = (itemId: string | number) => {
    removeSaved(itemId as number);
  };

  return (
    <div>
      {/* Render your lists, buttons etc */}
      <h2>Favorites ({favorites.length})</h2>
      {/* map favorites */}
      <h2>Saved ({saved.length})</h2>
      {/* map saved */}
    </div>
  );
}

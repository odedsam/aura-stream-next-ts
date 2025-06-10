import { prisma } from '../prisma';

// Types for response
type CollectionResponse = {
  favorites: number[];
  saved: number[];
};

// Get user collections from DB
export async function getCollections(userId: string): Promise<CollectionResponse> {
  // Get favorites movie and show IDs
  const favoritesRaw = await prisma.favoriteItem.findMany({
    where: { userId },
    select: { movieId: true, showId: true },
  });

  // Extract ids and flatten (movieId or showId)
  const favorites = favoritesRaw
    .map((item) => item.movieId ?? item.showId)
    .filter(Boolean) as number[];

  // Get saved (watchlist) movie and show IDs (simplified: all watchlist items of user)
  const savedRaw = await prisma.watchlistItem.findMany({
    where: { userId },
    select: { movieId: true, showId: true },
  });

  const saved = savedRaw.map((item) => item.movieId ?? item.showId).filter(Boolean) as number[];

  return { favorites, saved };
}

// Update favorites in DB
export async function updateFavorites(userId: string, favorites: number[]) {
  // Remove all old favorites for user
  await prisma.favoriteItem.deleteMany({ where: { userId } });

  // Insert new favorites (batch create)
  const data = favorites.map((id) => ({
    userId,
    movieId: id,
    showId: null, // You can add logic here to separate movies vs shows if you want
  }));

  if (data.length > 0) {
    await prisma.favoriteItem.createMany({ data });
  }
}

// Update saved in DB (watchlistItems)
export async function updateSaved(userId: string, saved: number[]) {
  // Remove all old saved for user
  await prisma.watchlistItem.deleteMany({ where: { userId } });

  // Insert new saved items (you might want to link watchlistId etc. in real app)
  const data = saved.map((id) => ({
    userId,
    movieId: id,
    showId: null,
    added_at: new Date(),
  }));

  if (data.length > 0) {
    await prisma.watchlistItem.createMany({ data });
  }
}

// Export all as api
export const api = {
  getCollections,
  updateFavorites,
  updateSaved,
};

import { prisma } from '../prisma';

type CollectionResponse = {
  favorites: any[];
  saved: any[];
};

export async function getCollections(userId: string): Promise<CollectionResponse> {
  const favoritesRaw = await prisma.favoriteItem.findMany({
    where: { userId },
    select: { movieId: true, showId: true },
  });

  const favorites = favoritesRaw
    .map((item) => item.movieId ?? item.showId)
    .filter(Boolean) as number[];

  const savedRaw = await prisma.watchlistItem.findMany({
    where: { userId },
    select: { movieId: true, showId: true },
  });

  const saved = savedRaw.map((item) => item.movieId ?? item.showId).filter(Boolean) as number[];

  return { favorites, saved };
}

export async function updateFavorites(userId: string, favorites: number[]) {
  await prisma.favoriteItem.deleteMany({ where: { userId } });

  const data = favorites.map((id) => ({
    userId,
    movieId: id,
    showId: null,
  }));

  if (data.length > 0) {
    await prisma.favoriteItem.createMany({ data });
  }
}

export async function updateSaved(userId: string, saved: number[]) {
  await prisma.watchlistItem.deleteMany({ where: { userId } });

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

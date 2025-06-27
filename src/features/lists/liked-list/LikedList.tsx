// components/LikedList/LikedList.tsx
import { Heart, Music, Film, Tv } from 'lucide-react';
import type { ContentItem, LikedListProps, LikedListStatsProps } from '@/types';
import { LikedListStats } from './LikedListStats';
import { ContentCard } from '../ContentCard';

export const LikedList: React.FC<LikedListProps> = ({
  likedItems,
  savedItems,
  onToggleSaved,
  onToggleLiked,
  onClearAllLiked,
}) => {
  const isSaved = (item: ContentItem): boolean => savedItems.some((saved) => saved.id === item.id);
  const isLiked = (item: ContentItem): boolean => likedItems.some((liked) => liked.id === item.id);

  const groupedContent = {
    shows: likedItems.filter((item) => item.type === 'show'),
    movies: likedItems.filter((item) => item.type === 'movie'),
    music: likedItems.filter((item) => item.type === 'music'),
  };

  const handleClearAll = (): void => {
    if (
      window.confirm(
        'Are you sure you want to remove all liked items? This action cannot be undone.',
      )
    ) {
      onClearAllLiked?.();
    }
  };

  if (likedItems.length === 0) {
    return (
      <section className="mb-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold flex items-center">
            <Heart className="w-8 h-8 text-red-500 mr-3" />
            Liked Content
          </h2>
        </div>

        <div className="text-center py-12">
          <Heart className="w-16 h-16 text-red-def mx-auto mb-4" />
          <p className="text-white text-lg mb-2">No liked content yet</p>
          <p className="text-white">
            Start liking some shows, movies, or music to see them here!
          </p>
        </div>
      </section>
    );
  }

  const ContentGroup: React.FC<{
    title: string;
    items: ContentItem[];
    icon: React.ReactNode;
    emptyMessage: string;
  }> = ({ title, items, icon, emptyMessage }) => {
    if (items.length === 0) return null;

    return (
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4 flex items-center text-gray-200">
          {icon}
          <span className="ml-2">{title}</span>
          <span className="ml-2 text-sm bg-gray-700 px-2 py-1 rounded-full">{items.length}</span>
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((item) => (
            <ContentCard
              key={item.id}
              item={item}
              isSaved={isSaved(item)}
              isLiked={isLiked(item)}
              onToggleSaved={onToggleSaved}
              onToggleLiked={onToggleLiked}
            />
          ))}
        </div>
      </div>
    );
  };

  return (
    <section className="mb-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold flex items-center">
          <Heart className="w-8 h-8 text-red-500 mr-3" />
          Liked Content
        </h2>

        {likedItems.length > 0 && onClearAllLiked && (
          <button
            onClick={handleClearAll}
            className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors text-sm font-medium">
            Clear All Liked
          </button>
        )}
      </div>

      <LikedListStats likedItems={likedItems} />

      <div className="space-y-8">
        <ContentGroup
          title="TV Shows"
          items={groupedContent.shows}
          icon={<Tv className="w-5 h-5 text-blue-400" />}
          emptyMessage="No liked TV shows"
        />

        <ContentGroup
          title="Movies"
          items={groupedContent.movies}
          icon={<Film className="w-5 h-5 text-green-400" />}
          emptyMessage="No liked movies"
        />

        <ContentGroup
          title="Music"
          items={groupedContent.music}
          icon={<Music className="w-5 h-5 text-purple-400" />}
          emptyMessage="No liked music"
        />
      </div>
    </section>
  );
};

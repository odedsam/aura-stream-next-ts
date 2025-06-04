import type { ContentSectionProps } from '@/types';
import { ContentItem } from '@/types';
import { ContentCard } from '@/features/lists/ContentCard';

export const ContentSection: React.FC<ContentSectionProps> = ({
  title,
  items,
  savedItems,
  likedItems,
  onToggleSaved,
  onToggleLiked,
  emptyMessage,
}) => {
  const isSaved = (item: ContentItem): boolean => savedItems.some((saved) => saved.id === item.id);

  const isLiked = (item: ContentItem): boolean => likedItems.some((liked) => liked.id === item.id);

  if (items.length === 0 && emptyMessage) {
    return (
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <p className="text-gray-400 text-center py-8">{emptyMessage}</p>
      </section>
    );
  }

  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
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
    </section>
  );
};

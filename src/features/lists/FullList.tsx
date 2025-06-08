'use client';
import { useState } from 'react';
import { ContentItem, SectionType } from '@/types';
import { SHOWS, MOVIES, MUSIC, STORAGE_KEYS } from '@/data/content';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { useVolumeControl } from '@/hooks/useVolumeControl';
import { Navigation } from '@/app/components/navigation/Navigation';
import { ContentSection } from '@/app/components/sections/ContentSection';
import { GlobalVolumeControl } from '@/app/components/controls/GlobalControlVolume';
import { LikedList } from './liked-list/LikedList';

const FullList: React.FC = () => {
  const [activeSection, setActiveSection] = useState<SectionType>('browse');

  const [savedItems, addSaved, removeSaved, toggleSaved] = useLocalStorage<ContentItem>(
    STORAGE_KEYS.SAVED_ITEMS,
    [],
  );

  const [likedItems, addLiked, removeLiked, toggleLiked] = useLocalStorage<ContentItem>(
    STORAGE_KEYS.LIKED_ITEMS,
    [],
  );

  const globalVolumeControl = useVolumeControl(75);

  const handleSectionChange = (section: SectionType): void => {
    setActiveSection(section);
  };

  const handleToggleSaved = (item: ContentItem): void => {
    toggleSaved(item);
  };

  const handleToggleLiked = (item: ContentItem): void => {
    toggleLiked(item);
  };

  const handleClearAllSaved = (): void => {
    savedItems.forEach((item) => removeSaved(item.id));
  };

  const handleClearAllLiked = (): void => {
    likedItems.forEach((item) => removeLiked(item.id));
  };

  const renderBrowseSection = (): React.JSX.Element => (
    <>
      <ContentSection
        title="TV Shows"
        items={SHOWS}
        savedItems={savedItems}
        likedItems={likedItems}
        onToggleSaved={handleToggleSaved}
        onToggleLiked={handleToggleLiked}
      />
      <ContentSection
        title="Movies"
        items={MOVIES}
        savedItems={savedItems}
        likedItems={likedItems}
        onToggleSaved={handleToggleSaved}
        onToggleLiked={handleToggleLiked}
      />
      <ContentSection
        title="Music"
        items={MUSIC}
        savedItems={savedItems}
        likedItems={likedItems}
        onToggleSaved={handleToggleSaved}
        onToggleLiked={handleToggleLiked}
      />
    </>
  );

  const renderContent = (): React.JSX.Element => {
    switch (activeSection) {
      case 'saved':
        return (
          <ContentSection
            title="Saved Content"
            items={savedItems}
            savedItems={savedItems}
            likedItems={likedItems}
            onToggleSaved={handleToggleSaved}
            onToggleLiked={handleToggleLiked}
            emptyMessage="No saved content yet. Start adding some!"
          />
        );
      case 'liked':
        return (
          <LikedList
            likedItems={likedItems}
            savedItems={savedItems}
            onToggleSaved={handleToggleSaved}
            onToggleLiked={handleToggleLiked}
            onClearAllLiked={handleClearAllLiked}
          />
        );
      default:
        return renderBrowseSection();
    }
  };

  return (
    <div className="min-h-screen my-24 content-block-black text-white">
      <Navigation
        activeSection={activeSection}
        savedCount={savedItems.length}
        likedCount={likedItems.length}
        onSectionChange={handleSectionChange}
      />

      <main className="p-6">{renderContent()}</main>

      <GlobalVolumeControl
        volume={globalVolumeControl.volume}
        isMuted={globalVolumeControl.isMuted}
        onVolumeChange={globalVolumeControl.handleVolumeChange}
        onToggleMute={globalVolumeControl.toggleMute}
      />
    </div>
  );
};

export default FullList;

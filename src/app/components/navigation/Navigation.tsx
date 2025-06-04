import type { SectionType } from '@/types';
import { Bookmark, Heart } from 'lucide-react';

interface NavigationProps {
  activeSection: SectionType;
  savedCount: number;
  likedCount: number;
  onSectionChange: (section: SectionType) => void;
}

export const Navigation: React.FC<NavigationProps> = ({
  activeSection,
  savedCount,
  likedCount,
  onSectionChange,
}) => {
  const navItems = [
    { id: 'browse' as const, label: 'Browse', icon: null },
    { id: 'saved' as const, label: `Saved (${savedCount})`, icon: Bookmark },
    { id: 'liked' as const, label: `Liked (${likedCount})`, icon: Heart },
  ];

  return (
    <nav className="bg-gray-800 p-4 border-b border-gray-700">
      <div className="flex space-x-6">
        {navItems.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            onClick={() => onSectionChange(id)}
            className={`px-4 py-2 rounded-lg transition-colors flex items-center ${
              activeSection === id ? 'bg-blue-600' : 'hover:bg-gray-700'
            }`}>
            {Icon && <Icon className="w-4 h-4 mr-2" />}
            {label}
          </button>
        ))}
      </div>
    </nav>
  );
};

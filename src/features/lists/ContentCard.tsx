import type { ContentCardProps } from '@/types';
import { VolumeControl } from '@/app/components/controls/Controls';
import { useVolumeControl } from '@/hooks/useVolumeControl';
import { Play, Plus, Star, ThumbsUp } from 'lucide-react';

export const ContentCard: React.FC<ContentCardProps> = ({
  item,
  isSaved,
  isLiked,
  onToggleSaved,
  onToggleLiked,
}) => {
  const volumeControl = useVolumeControl(75);

  const handleSaveClick = (): void => {
    onToggleSaved(item);
  };

  const handleLikeClick = (): void => {
    onToggleLiked(item);
  };

  return (
    <div className="bg-gray-800 rounded-lg p-4 hover:bg-gray-700 transition-colors">
      <div className="flex justify-between items-start mb-3">
        <div className="flex-1">
          <h3 className="text-white font-semibold text-lg">{item.title}</h3>
          {item.artist && <p className="text-gray-400">{item.artist}</p>}
          <p className="text-gray-500 text-sm">{item.genre}</p>
          {item.rating && (
            <div className="flex items-center mt-1">
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
              <span className="text-yellow-400 ml-1">{item.rating}</span>
            </div>
          )}
        </div>
        <button className="p-2 hover:bg-gray-600 rounded-lg transition-colors" title="Play">
          <Play className="w-8 h-8 text-white opacity-70 hover:opacity-100" />
        </button>
      </div>

      <div className="flex justify-between items-center">
        <div className="flex space-x-2">
          <button
            onClick={handleSaveClick}
            className={`p-2 rounded-lg transition-all duration-200 ${
              isSaved ? 'bg-green-600 text-white' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            }`}
            title={isSaved ? 'Remove from saved' : 'Add to saved'}>
            <Plus
              className={`w-5 h-5 transition-transform duration-200 ${isSaved ? 'rotate-45' : ''}`}
            />
          </button>

          <button
            onClick={handleLikeClick}
            className={`p-2 rounded-lg transition-colors ${
              isLiked ? 'bg-red-600 text-white' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            }`}
            title={isLiked ? 'Unlike' : 'Like'}>
            <ThumbsUp className={`w-5 h-5 ${isLiked ? 'fill-current' : ''}`} />
          </button>
        </div>

        <VolumeControl
          volume={volumeControl.volume}
          isMuted={volumeControl.isMuted}
          onVolumeChange={volumeControl.handleVolumeChange}
          onToggleMute={volumeControl.toggleMute}
        />
      </div>
    </div>
  );
};

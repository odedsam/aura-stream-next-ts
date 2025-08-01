import type { VolumeControlProps } from '@/types';
import { cn } from '@/utils';
import { Volume2, VolumeX } from 'lucide-react';

export const VolumeControl: React.FC<VolumeControlProps> = ({
  volume,
  isMuted,
  onVolumeChange,
  onToggleMute,
  className = '',
  showLabel = false,
}) => {
  return (
    <div className={cn('flex items-center space-x-2', className)}>
      {showLabel && <span className="text-sm font-semibold text-white">Volume</span>}
      <button
        onClick={onToggleMute}
        className="p-2 bg-gray-def rounded-lg hover:bg-gray-def transition-colors"
        title={isMuted ? 'Unmute' : 'Mute'}>
        {isMuted || volume === 0 ? (
          <VolumeX className="w-5 h-5 text-black" />
        ) : (
          <Volume2 className="w-5 h-5 text-white" />
        )}
      </button>
      <input
        type="range"
        min="0"
        max="100"
        value={isMuted ? 0 : volume}
        onChange={onVolumeChange}
        className="w-16 h-2 bg-gray-100 text-gray-100 rounded-lg appearance-none cursor-pointer slider"
      />
      {showLabel && (
        <span className="text-sm font-semibold text-gray-def w-8">{isMuted ? 0 : volume}%</span>
      )}
    </div>
  );
};

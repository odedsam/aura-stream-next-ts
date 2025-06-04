import type { GlobalVolumeControlProps } from '@/types';
import { VolumeControl } from './Controls';

export const GlobalVolumeControl: React.FC<GlobalVolumeControlProps> = ({
  volume,
  isMuted,
  onVolumeChange,
  onToggleMute,
}) => {
  return (
    <div className="fixed bottom-4 right-4 bg-gray-800 p-4 rounded-lg border border-gray-700 shadow-lg">
      <VolumeControl
        volume={volume}
        isMuted={isMuted}
        onVolumeChange={onVolumeChange}
        onToggleMute={onToggleMute}
        className="w-auto"
        showLabel={true}
      />
    </div>
  );
};

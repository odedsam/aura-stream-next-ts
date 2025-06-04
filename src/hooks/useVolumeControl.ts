import { useState } from 'react';

interface VolumeControlState {
  volume: number;
  isMuted: boolean;
}

interface VolumeControlActions {
  setVolume: (volume: number) => void;
  toggleMute: () => void;
  handleVolumeChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export function useVolumeControl(initialVolume: number = 75): VolumeControlState & VolumeControlActions {
  const [volume, setVolumeState] = useState<number>(initialVolume);
  const [isMuted, setIsMuted] = useState<boolean>(false);

  const setVolume = (newVolume: number): void => {
    setVolumeState(newVolume);
    if (newVolume > 0) {
      setIsMuted(false);
    }
  };

  const toggleMute = (): void => {
    setIsMuted(prev => !prev);
  };

  const handleVolumeChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const newVolume = parseInt(event.target.value);
    setVolume(newVolume);
  };

  return {
    volume,
    isMuted,
    setVolume,
    toggleMute,
    handleVolumeChange,
  };
}

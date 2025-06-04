import { LikedListStatsProps } from '@/types';
import { Film, Music, Tv } from 'lucide-react';

export const LikedListStats: React.FC<LikedListStatsProps> = ({ likedItems }) => {
  const stats = {
    shows: likedItems.filter((item) => item.type === 'show').length,
    movies: likedItems.filter((item) => item.type === 'movie').length,
    music: likedItems.filter((item) => item.type === 'music').length,
  };

  const StatCard: React.FC<{
    icon: React.ReactNode;
    count: number;
    label: string;
    color: string;
  }> = ({ icon, count, label, color }) => (
    <div className={`bg-gray-800 rounded-lg p-4 border-l-4 ${color}`}>
      <div className="flex items-center space-x-3">
        <div className="p-2 bg-gray-700 rounded-lg">{icon}</div>
        <div>
          <div className="text-2xl font-bold text-white">{count}</div>
          <div className="text-gray-400 text-sm">{label}</div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
      <StatCard
        icon={<Tv className="w-5 h-5 text-blue-400" />}
        count={stats.shows}
        label="TV Shows"
        color="border-blue-400"
      />
      <StatCard
        icon={<Film className="w-5 h-5 text-green-400" />}
        count={stats.movies}
        label="Movies"
        color="border-green-400"
      />
      <StatCard
        icon={<Music className="w-5 h-5 text-purple-400" />}
        count={stats.music}
        label="Music"
        color="border-purple-400"
      />
    </div>
  );
};

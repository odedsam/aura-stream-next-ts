"use client";

export interface Movie {
  id: number;
  title: string;
  description: string;
  image: string;
  genre?: string;
  rating?: string;
  year?: number;
}

export const StreamVibeApp: React.FC = () => {
  return (
    <div className="min-h-screen bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div className="bg-gray-900 p-6 rounded-lg">
            <h2 className="text-white text-xl font-bold mb-4">Movies</h2>
            <p className="text-gray-400">Discover amazing movies</p>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg">
            <h2 className="text-white text-xl font-bold mb-4">Shows</h2>
            <p className="text-gray-400">Watch your favorite TV shows</p>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-white text-2xl font-bold mb-6">Our Genres</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {["Action", "Comedy", "Drama", "Horror", "Sci-Fi", "Romance"].map((genre) => (
              <div
                key={genre}
                className="bg-gray-800 p-4 rounded-lg text-center hover:bg-gray-700 transition-colors duration-200 cursor-pointer"
              >
                <span className="text-white font-medium">{genre}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StreamVibeApp;

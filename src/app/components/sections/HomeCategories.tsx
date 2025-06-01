import { categories } from '@/config/mock';

const HomeCategories = () => {
  return (
    <div className="w-full max-w-6xl">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Explore our wide variety of categories</h2>
          <p className="text-gray-400">
            Whether you're looking for a comedy to make you laugh, a drama to make you think, or a documentary to learn something new
          </p>
        </div>

        <div className="hidden md:flex gap-2">
          <button className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Category Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {categories.map((category, index) => (
          <div
            key={category.name}
            className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-6 hover:scale-105 transition-transform duration-200 cursor-pointer border border-gray-700 hover:border-red-500">
            <div className="text-3xl mb-3">{category.icon}</div>
            <h3 className="text-white font-semibold text-lg mb-1">{category.name}</h3>
            <p className="text-gray-400 text-sm">{category.count} movies</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default HomeCategories;

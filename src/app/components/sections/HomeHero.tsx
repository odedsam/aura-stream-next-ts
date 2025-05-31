"use client";
import React from 'react';
import { Play, Search, Menu } from 'lucide-react';

interface Movie {
  id: number;
  title: string;
  poster: string;
  category: string;
}

const HomeHero = () => {
  // Sample movie data for the grid background
  const movies: Movie[] = [
    { id: 1, title: "Avengers", poster: "/api/placeholder/200/300", category: "Action" },
    { id: 2, title: "The Batman", poster: "/api/placeholder/200/300", category: "Action" },
    { id: 3, title: "Spider-Man", poster: "/api/placeholder/200/300", category: "Action" },
    { id: 4, title: "Dune", poster: "/api/placeholder/200/300", category: "Sci-Fi" },
    { id: 5, title: "Top Gun", poster: "/api/placeholder/200/300", category: "Action" },
    { id: 6, title: "Black Widow", poster: "/api/placeholder/200/300", category: "Action" },
    { id: 7, title: "Matrix", poster: "/api/placeholder/200/300", category: "Sci-Fi" },
    { id: 8, title: "Wonder Woman", poster: "/api/placeholder/200/300", category: "Action" },
    { id: 9, title: "Joker", poster: "/api/placeholder/200/300", category: "Drama" },
    { id: 10, title: "Aquaman", poster: "/api/placeholder/200/300", category: "Action" },
    { id: 11, title: "Thor", poster: "/api/placeholder/200/300", category: "Action" },
    { id: 12, title: "Captain Marvel", poster: "/api/placeholder/200/300", category: "Action" },
    { id: 13, title: "Iron Man", poster: "/api/placeholder/200/300", category: "Action" },
    { id: 14, title: "Guardians", poster: "/api/placeholder/200/300", category: "Action" },
    { id: 15, title: "Ant-Man", poster: "/api/placeholder/200/300", category: "Action" },
    { id: 16, title: "Doctor Strange", poster: "/api/placeholder/200/300", category: "Action" },
    { id: 17, title: "Black Panther", poster: "/api/placeholder/200/300", category: "Action" },
    { id: 18, title: "Captain America", poster: "/api/placeholder/200/300", category: "Action" },
    { id: 19, title: "Hulk", poster: "/api/placeholder/200/300", category: "Action" },
    { id: 20, title: "Deadpool", poster: "/api/placeholder/200/300", category: "Comedy" },
  ];


  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* Navigation */}
      <nav className="relative z-50 flex items-center justify-between px-4 md:px-8 py-4">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-red-600 rounded flex items-center justify-center">
              <Play className="w-4 h-4 text-white" />
            </div>
            <span className="text-white font-bold text-xl">StreamVibe</span>
          </div>

          <div className="hidden md:flex items-center gap-6">
            <a href="#" className="text-white hover:text-red-500 transition-colors">Home</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Movies & Shows</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Support</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Subscriptions</a>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Search className="w-5 h-5 text-white cursor-pointer hover:text-red-500 transition-colors" />
          <div className="w-8 h-8 bg-gray-700 rounded-full"></div>
          <Menu className="w-5 h-5 text-white md:hidden cursor-pointer" />
        </div>
      </nav>

      {/* Movie Grid Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="grid grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-2 p-4 h-full">
          {movies.map((movie, index) => (
            <div
              key={movie.id}
              className="aspect-[2/3] rounded-lg overflow-hidden bg-gradient-to-br from-purple-600 via-red-500 to-orange-500 animate-pulse"
              style={{
                animationDelay: `${index * 0.1}s`,
                animationDuration: '3s'
              }}
            >
              <div className="w-full h-full bg-gradient-to-t from-black/50 to-transparent flex items-end p-2">
                <span className="text-white text-xs font-medium truncate">{movie.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50"></div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 max-w-4xl leading-tight">
          The Best Streaming Experience
        </h1>

        <p className="text-gray-300 text-lg md:text-xl max-w-2xl mb-8 leading-relaxed">
          StreamVibe is the best streaming experience for watching your favorite movies and shows on demand, anytime, anywhere. With StreamVibe, you can enjoy a wide variety of content including the latest blockbusters, classic movies, popular TV shows, and more. You can also create your own watchlists, so you never miss a beat.
        </p>

        <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 flex items-center gap-3 mb-16">
          <Play className="w-5 h-5" />
          Start Watching Now
        </button>

        {/* Categories Section */}

      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"></div>
    </div>
  );
};




export const HomeCategories=()=> {

  const categories = [
    { name: "Action", count: 120, icon: "🎬" },
    { name: "Adventure", count: 85, icon: "🗺️" },
    { name: "Comedy", count: 95, icon: "😄" },
    { name: "Drama", count: 110, icon: "🎭" },
  ];
  return (
       <div className="w-full max-w-6xl">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Explore our wide variety of categories
              </h2>
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
                className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-6 hover:scale-105 transition-transform duration-200 cursor-pointer border border-gray-700 hover:border-red-500"
              >
                <div className="text-3xl mb-3">{category.icon}</div>
                <h3 className="text-white font-semibold text-lg mb-1">{category.name}</h3>
                <p className="text-gray-400 text-sm">{category.count} movies</p>
              </div>
            ))}
          </div>
        </div>
  );
}


















export default HomeHero;

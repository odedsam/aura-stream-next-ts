"use client";

import React, { useState, useEffect } from "react";
import { Search, Bell, Menu, X, Play, Plus, Volume2, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { sampleMovies } from "@/config/mock";

// Types
export interface Movie {
  id: number;
  title: string;
  description: string;
  image: string;
  genre?: string;
  rating?: string;
  year?: number;
}

interface HeaderProps {
  className?: string;
}

interface HeroSliderProps {
  movies: Movie[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
  className?: string;
}

// Header Component
export const Header: React.FC<HeaderProps> = ({ className = "" }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Movies & Shows", href: "/movies-shows" },
    { label: "Support", href: "/support" },
    { label: "Subscriptions", href: "/subscriptions" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/90 backdrop-blur-md" : "bg-transparent"
      } ${className}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center space-x-2">
              <Image src="/assets/LogoDesktop.svg" alt="StreamVibe" width={40} height={40} className="w-8 h-8 lg:w-10 lg:h-10" />
              <span className="text-white font-bold text-lg lg:text-xl">StreamVibe</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-300 hover:text-white transition-colors duration-200 font-medium"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right Side Icons */}
          <div className="flex items-center space-x-4">
            {/* Search Icon */}
            <button className="p-2 text-gray-300 hover:text-white transition-colors duration-200">
              <Search className="w-5 h-5" />
            </button>

            {/* Notification Icon */}
            <button className="p-2 text-gray-300 hover:text-white transition-colors duration-200 relative">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-600 rounded-full"></span>
            </button>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-gray-300 hover:text-white transition-colors duration-200"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-black/95 backdrop-blur-md border-t border-gray-800">
            <nav className="py-4 space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-800/50 transition-colors duration-200 font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

// Hero Slider Component
export const HeroSlider: React.FC<HeroSliderProps> = ({
  movies,
  autoPlay = true,
  autoPlayInterval = 5000,
  className = "",
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(autoPlay);

  useEffect(() => {
    if (!isPlaying || movies.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % movies.length);
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [isPlaying, movies.length, autoPlayInterval]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % movies.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + movies.length) % movies.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  if (!movies.length) return null;

  const currentMovie = movies[currentSlide];

  return (
    <div className={`relative w-full ${className}`}>
      {/* Main Hero Container */}
      <div className="relative h-[60vh] sm:h-[70vh] lg:h-[80vh] xl:h-[90vh] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image src={currentMovie.image} alt={currentMovie.title || "hey"} fill className="object-cover" priority />
          {/* Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </div>

        {/* Content */}
        <div className="relative h-full flex items-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl lg:max-w-3xl">
              {/* Movie Info */}
              <div className="space-y-4 lg:space-y-6">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight">
                  {currentMovie.title}
                </h1>

                <p className="text-sm sm:text-base lg:text-lg text-gray-200 leading-relaxed max-w-xl">
                  {currentMovie.description}
                </p>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4">
                  <button className="flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 lg:px-8 py-3 lg:py-4 rounded-lg font-semibold transition-colors duration-200 text-sm lg:text-base">
                    <Play className="w-4 h-4 lg:w-5 lg:h-5 fill-white" />
                    Play Now
                  </button>

                  <button className="flex items-center justify-center gap-2 bg-gray-800/80 hover:bg-gray-700/80 text-white px-6 lg:px-8 py-3 lg:py-4 rounded-lg font-semibold transition-colors duration-200 text-sm lg:text-base backdrop-blur-sm">
                    <Plus className="w-4 h-4 lg:w-5 lg:h-5" />
                    Add to List
                  </button>

                  <button className="flex items-center justify-center gap-2 bg-gray-800/80 hover:bg-gray-700/80 text-white px-4 lg:px-6 py-3 lg:py-4 rounded-lg font-semibold transition-colors duration-200 backdrop-blur-sm">
                    <Volume2 className="w-4 h-4 lg:w-5 lg:h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        {movies.length > 1 && (
          <>
            <button
              onClick={prevSlide}
              className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 w-10 h-10 lg:w-12 lg:h-12 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-colors duration-200 backdrop-blur-sm"
            >
              <ChevronLeft className="w-5 h-5 lg:w-6 lg:h-6" />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 w-10 h-10 lg:w-12 lg:h-12 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-colors duration-200 backdrop-blur-sm"
            >
              <ChevronRight className="w-5 h-5 lg:w-6 lg:h-6" />
            </button>
          </>
        )}

        {/* Slide Indicators */}
        {movies.length > 1 && (
          <div className="absolute bottom-6 lg:bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
            {movies.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 lg:w-3 lg:h-3 rounded-full transition-all duration-200 ${
                  index === currentSlide ? "bg-red-600 w-6 lg:w-8" : "bg-white/50 hover:bg-white/70"
                }`}
              />
            ))}
          </div>
        )}

        {/* Mobile Play/Pause Control */}
        {movies.length > 1 && (
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="absolute bottom-6 right-4 lg:hidden w-10 h-10 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-colors duration-200 backdrop-blur-sm"
          >
            {isPlaying ? (
              <div className="w-3 h-3 flex gap-0.5">
                <div className="w-1 h-3 bg-white"></div>
                <div className="w-1 h-3 bg-white"></div>
              </div>
            ) : (
              <Play className="w-4 h-4 fill-white" />
            )}
          </button>
        )}
      </div>
    </div>
  );
};

// Example Usage Component
export const StreamVibeApp: React.FC = () => {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <HeroSlider movies={sampleMovies} />

      {/* Additional content sections would go here */}
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

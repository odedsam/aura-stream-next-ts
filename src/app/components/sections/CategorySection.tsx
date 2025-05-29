import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Types
interface NavigationControlsProps {
  onPrevious: () => void;
  onNext: () => void;
  currentSlide?: number;
  totalSlides?: number;
  showDots?: boolean;
}

interface ContentSectionProps {
  title: string;
  subtitle?: string;
  badge?: string;
  badgeColor?: "red" | "blue" | "green" | "yellow";
  children: React.ReactNode;
  onPrevious?: () => void;
  onNext?: () => void;
  currentSlide?: number;
  totalSlides?: number;
  showNavigation?: boolean;
  showDots?: boolean;
  className?: string;
}

interface SliderContainerProps {
  children: React.ReactNode;
  className?: string;
}

// Arrow Component (reusable)
const ArrowButton: React.FC<{
  direction: "left" | "right";
  onClick: () => void;
  disabled?: boolean;
}> = ({ direction, onClick, disabled = false }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        w-12 h-12 rounded-full border border-gray-600 bg-gray-900/50
        hover:bg-gray-800 hover:border-gray-500
        disabled:opacity-50 disabled:cursor-not-allowed
        flex items-center justify-center
        transition-all duration-200
        ${disabled ? "hover:bg-gray-900/50 hover:border-gray-600" : ""}
      `}
    >
      {direction === "left" ? (
        <ChevronLeft className="w-5 h-5 text-white" />
      ) : (
        <ChevronRight className="w-5 h-5 text-white" />
      )}
    </button>
  );
};

// Navigation Controls Component
const NavigationControls: React.FC<NavigationControlsProps> = ({
  onPrevious,
  onNext,
  currentSlide = 0,
  totalSlides = 5,
  showDots = true,
}) => {
  return (
    <div className="flex items-center gap-4">
      {/* Navigation Arrows */}
      <div className="flex items-center gap-2">
        <ArrowButton direction="left" onClick={onPrevious} disabled={currentSlide === 0} />
        <ArrowButton direction="right" onClick={onNext} disabled={currentSlide >= totalSlides - 1} />
      </div>

      {/* Dots Indicator */}
      {showDots && (
        <div className="flex items-center gap-2 ml-2">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <div
              key={index}
              className={`
                w-2 h-2 rounded-full transition-colors duration-200
                ${index === currentSlide ? "bg-red-600" : "bg-gray-600"}
              `}
            />
          ))}
        </div>
      )}
    </div>
  );
};

// Slider Container Component
const SliderContainer: React.FC<SliderContainerProps> = ({ children, className = "" }) => {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div className="flex transition-transform duration-500 ease-in-out">{children}</div>
    </div>
  );
};

// Main Content Section Component
const ContentSection: React.FC<ContentSectionProps> = ({
  title,
  subtitle,
  badge,
  badgeColor = "red",
  children,
  onPrevious = () => {},
  onNext = () => {},
  currentSlide = 0,
  totalSlides = 5,
  showNavigation = true,
  showDots = true,
  className = "",
}) => {
  const badgeColorClasses = {
    red: "bg-red-600 text-white",
    blue: "bg-blue-600 text-white",
    green: "bg-green-600 text-white",
    yellow: "bg-yellow-600 text-black",
  };

  return (
    <div className={`bg-black py-16 px-8 ${className}`}>
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-4">
            {/* Badge */}
            {badge && (
              <span
                className={`
                px-4 py-2 rounded-lg text-sm font-medium
                ${badgeColorClasses[badgeColor]}
              `}
              >
                {badge}
              </span>
            )}

            {/* Title and Subtitle */}
            <div>
              <h2 className="text-white text-4xl font-bold mb-2">{title}</h2>
              {subtitle && <p className="text-gray-400 text-lg">{subtitle}</p>}
            </div>
          </div>

          {/* Navigation Controls */}
          {showNavigation && (
            <NavigationControls
              onPrevious={onPrevious}
              onNext={onNext}
              currentSlide={currentSlide}
              totalSlides={totalSlides}
              showDots={showDots}
            />
          )}
        </div>

        {/* Content Area */}
        <div className="relative">{children}</div>
      </div>
    </div>
  );
};

// Example Usage Components

// Genre Card Component for demonstration
const GenreCard: React.FC<{
  title: string;
  images: string[];
  onClick?: () => void;
}> = ({ title, images, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="bg-gray-900/30 rounded-xl border border-gray-800 p-6 hover:bg-gray-900/50 transition-colors duration-200 cursor-pointer group"
    >
      {/* Image Grid */}
      <div className="grid grid-cols-2 gap-2 mb-4">
        {images.slice(0, 4).map((image, index) => (
          <div key={index} className="aspect-square bg-gray-700 rounded-lg overflow-hidden">
            <div className="w-full h-full bg-gradient-to-br from-gray-600 to-gray-800"></div>
          </div>
        ))}
      </div>

      {/* Title with Arrow */}
      <div className="flex items-center justify-between">
        <h3 className="text-white text-lg font-medium">{title}</h3>
        <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-200" />
      </div>
    </div>
  );
};

// Example: Our Genres Section
const OurGenresSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const totalSlides = 3;

  const genres = [
    { title: "Action", images: ["1", "2", "3", "4"] },
    { title: "Adventure", images: ["1", "2", "3", "4"] },
    { title: "Comedy", images: ["1", "2", "3", "4"] },
    { title: "Drama", images: ["1", "2", "3", "4"] },
    { title: "Horror", images: ["1", "2", "3", "4"] },
  ];

  const handlePrevious = () => {
    setCurrentSlide((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => Math.min(totalSlides - 1, prev + 1));
  };

  return (
    <ContentSection
      title="Our Genres"
      badge="Shows"
      currentSlide={currentSlide}
      totalSlides={totalSlides}
      onPrevious={handlePrevious}
      onNext={handleNext}
    >
      <SliderContainer>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 w-full">
          {genres.map((genre, index) => (
            <GenreCard
              key={index}
              title={genre.title}
              images={genre.images}
              onClick={() => console.log(`Clicked on ${genre.title}`)}
            />
          ))}
        </div>
      </SliderContainer>
    </ContentSection>
  );
};

// Example: Popular Top 10 Section
const PopularTop10Section: React.FC = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const totalSlides = 4;

  const categories = [
    { title: "Action", badge: "Top 10 in" },
    { title: "Adventure", badge: "Top 10 in" },
    { title: "Comedy", badge: "Top 10 in" },
    { title: "Drama", badge: "Top 10 in" },
  ];

  return (
    <ContentSection
      title="Popular Top 10 In Genres"
      currentSlide={currentSlide}
      totalSlides={totalSlides}
      onPrevious={() => setCurrentSlide((prev) => Math.max(0, prev - 1))}
      onNext={() => setCurrentSlide((prev) => Math.min(totalSlides - 1, prev + 1))}
    >
      <SliderContainer>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {categories.map((category, index) => (
            <div key={index} className="bg-gray-900/30 rounded-xl border border-gray-800 p-6">
              <div className="grid grid-cols-2 gap-2 mb-4">
                {Array.from({ length: 4 }).map((_, imgIndex) => (
                  <div key={imgIndex} className="aspect-square bg-gray-700 rounded-lg"></div>
                ))}
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <span className="bg-red-600 text-white px-2 py-1 rounded text-xs font-medium mb-2 inline-block">
                    {category.badge}
                  </span>
                  <h3 className="text-white text-lg font-medium">{category.title}</h3>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </div>
            </div>
          ))}
        </div>
      </SliderContainer>
    </ContentSection>
  );
};

// Example: Trending Shows Section
const TrendingShowsSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const totalSlides = 2;

  const shows = [{ title: "Show 1" }, { title: "Show 2" }, { title: "Show 3" }, { title: "Show 4" }];

  return (
    <ContentSection
      title="Trending Shows Now"
      currentSlide={currentSlide}
      totalSlides={totalSlides}
      onPrevious={() => setCurrentSlide((prev) => Math.max(0, prev - 1))}
      onNext={() => setCurrentSlide((prev) => Math.min(totalSlides - 1, prev + 1))}
    >
      <SliderContainer>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {shows.map((show, index) => (
            <div key={index} className="bg-gray-900/30 rounded-xl border border-gray-800 overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-red-900/50 to-blue-900/50"></div>
              <div className="p-4">
                <h3 className="text-white text-lg font-medium">{show.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </SliderContainer>
    </ContentSection>
  );
};

// Main Demo Component
const StreamVibeContentSections: React.FC = () => {
  return (
    <div className="bg-black">
      <OurGenresSection />
      <PopularTop10Section />
      <TrendingShowsSection />
    </div>
  );
};

export default StreamVibeContentSections;
export { ContentSection, NavigationControls, SliderContainer, ArrowButton, GenreCard };
export type { ContentSectionProps, NavigationControlsProps, SliderContainerProps };

"use client";

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Plus, Star } from 'lucide-react';

interface CastMember {
  id: number;
  name: string;
  image: string;
}

interface Review {
  id: number;
  name: string;
  location: string;
  rating: number;
  content: string;
}

const MovieReviewComponent = () => {
  const [currentCastIndex, setCastIndex] = useState(0);
  const [currentReviewIndex, setReviewIndex] = useState(0);

  // Sample data
  const castMembers: CastMember[] = [
    { id: 1, name: "Winona Ryder", image: "/api/placeholder/80/80" },
    { id: 2, name: "David Harbour", image: "/api/placeholder/80/80" },
    { id: 3, name: "Millie Bobby Brown", image: "/api/placeholder/80/80" },
    { id: 4, name: "Finn Wolfhard", image: "/api/placeholder/80/80" },
    { id: 5, name: "Gaten Matarazzo", image: "/api/placeholder/80/80" },
    { id: 6, name: "Caleb McLaughlin", image: "/api/placeholder/80/80" },
    { id: 7, name: "Noah Schnapp", image: "/api/placeholder/80/80" },
    { id: 8, name: "Sadie Sink", image: "/api/placeholder/80/80" },
  ];

  const reviews: Review[] = [
    {
      id: 1,
      name: "Aniket Roy",
      location: "From India",
      rating: 4.5,
      content: "This movie was recommended to me by a very dear friend who went for the movie by herself. I went to the cinemas to watch but had a houseful board so couldn't watch it."
    },
    {
      id: 2,
      name: "Swaraj",
      location: "From India",
      rating: 5,
      content: "A restless king promises his lands to the local tribals in exchange of a stone (Panjurli, a deity of Keradi Village) wherein he finds solace and peace of mind."
    },
    {
      id: 3,
      name: "Priya Sharma",
      location: "From Mumbai",
      rating: 4,
      content: "An incredible cinematic experience that keeps you on the edge of your seat. The supernatural elements are beautifully woven into the narrative."
    }
  ];

  const visibleCastMembers = 6;
  const maxCastIndex = Math.max(0, castMembers.length - visibleCastMembers);

  const nextCast = () => {
    setCastIndex(prev => Math.min(prev + 1, maxCastIndex));
  };

  const prevCast = () => {
    setCastIndex(prev => Math.max(prev - 1, 0));
  };

  const nextReview = () => {
    setReviewIndex(prev => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setReviewIndex(prev => (prev - 1 + reviews.length) % reviews.length);
  };

  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    return (
      <div className="flex items-center gap-1">
        {[...Array(5)].map((_, index) => (
          <Star
            key={index}
            className={`w-4 h-4 ${
              index < fullStars
                ? 'fill-red-500 text-red-500'
                : index === fullStars && hasHalfStar
                ? 'fill-red-500/50 text-red-500'
                : 'text-gray-600'
            }`}
          />
        ))}
        <span className="text-white ml-2 text-sm">{rating}</span>
      </div>
    );
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen p-4 md:p-8">
      <div className="max-w-6xl mx-auto space-y-8">

        {/* Description Section */}
        <section>
          <h2 className="text-xl font-semibold mb-4 text-gray-300">Description</h2>
          <p className="text-gray-400 leading-relaxed max-w-4xl">
            When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying
            supernatural forces and one strange little girl.
          </p>
        </section>

        {/* Cast Section */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-300">Cast</h2>
            <div className="flex gap-2">
              <button
                onClick={prevCast}
                disabled={currentCastIndex === 0}
                className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextCast}
                disabled={currentCastIndex >= maxCastIndex}
                className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="overflow-hidden">
            <div
              className="flex gap-4 transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentCastIndex * (80 + 16)}px)` }}
            >
              {castMembers.map((member) => (
                <div key={member.id} className="flex-shrink-0">
                  <div className="w-20 h-20 rounded-lg overflow-hidden bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-semibold">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Reviews Section */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-300">Reviews</h2>
            <button className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors">
              <Plus className="w-4 h-4" />
              <span className="text-sm">Add Your Review</span>
            </button>
          </div>

          <div className="relative">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {reviews.slice(currentReviewIndex, currentReviewIndex + 2).map((review) => (
                <div key={review.id} className="bg-gray-800 rounded-lg p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-semibold text-white">{review.name}</h3>
                      <p className="text-gray-400 text-sm">{review.location}</p>
                    </div>
                    {renderStars(review.rating)}
                  </div>
                  <p className="text-gray-300 leading-relaxed">{review.content}</p>
                </div>
              ))}
            </div>

            {/* Review Navigation */}
            <div className="flex items-center justify-center mt-6 gap-4">
              <button
                onClick={prevReview}
                className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <div className="flex gap-2">
                {reviews.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setReviewIndex(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentReviewIndex ? 'bg-red-500' : 'bg-gray-600'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextReview}
                className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default MovieReviewComponent;

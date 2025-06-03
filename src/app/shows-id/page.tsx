"use client";
import MovieDescription from '@/features/details/ShowDetails';
import MovieReviewComponent from '../components/sections/ReviewsSection';
import MovieDetailsSidebar from '@/features/details/GenreDetailsSidebar';
import CallToAction from '../layouts/CallToAction';

export default function page() {
  return (
    <div className="">
      <MovieDetailsSidebar />
      <MovieDescription />
      <MovieReviewComponent />
      <CallToAction />
    </div>
  );
}

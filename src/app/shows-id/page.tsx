"use client";
import MovieDescription from '@/features/movie-detailes/MovieDescription';
import MovieReviewComponent from '../components/sections/ReviewsSection';
import MovieDetailsSidebar from '@/features/movie-detailes/MovieDetailsSidebar';
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

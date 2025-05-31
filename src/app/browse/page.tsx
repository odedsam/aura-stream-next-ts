"use client";
import { sampleMovies } from '@/config/mock';
import { StreamVibeApp } from '../components/sections/AbouSection';
import { HeroSlider } from '../components/sliders/HeroSlider';
import CategorySection from '../components/sections/CategorySection';
import CallToAction from '../layouts/CallToAction';

export default function page() {
  return (
    <div className="">
      <HeroSlider movies={sampleMovies} />
      <StreamVibeApp />
      <CategorySection />
      <CallToAction />
    </div>
  );
}

'use client';
import CategorySection from './components/sections/CategorySection';
import StreamVibeFAQs from './components/sections/FaqsSection';
import HomeHero from '@/app/components/sections/HomeHero';
import HomeCategories from '@/app/components/sections/HomeCategories';

import StreamVibePricing from './components/sections/pricing/PricingSection';
import CallToAction from './layouts/CallToAction';
import DeviceSection from './components/sections/DeviceSection';
export default function Page() {
  return (
    <main className="layout">
      <HomeHero />
      <HomeCategories />
      <DeviceSection />
      <CategorySection />
      <StreamVibeFAQs />
      <StreamVibePricing />
      <CallToAction />
    </main>
  );
}

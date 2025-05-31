"use client";
import CategorySection from './components/sections/CategorySection';
import StreamVibeFAQs from './components/sections/FaqsSection';
import HomeHero,{HomeCategories} from "@/app/components/sections/HomeHero"

import StreamVibePricing from './components/sections/pricing/PricingSection';
import CallToAction from './layouts/CallToAction';
export default function Page() {
  return (
    <main className="layout">
      <HomeHero />
      <HomeCategories />
      <CategorySection />
      <StreamVibeFAQs />
      <StreamVibePricing />
      <CallToAction />
    </main>
  );
}

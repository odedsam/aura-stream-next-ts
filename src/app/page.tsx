"use client";
import CategorySection from './components/sections/CategorySection';
import StreamVibeFAQs from './components/sections/FaqsSection';
import StreamVibePricing from './components/sections/PricingSection';
import CallToAction from './layouts/CallToAction';
export default function Page() {
  return (
    <main className="layout">
      <StreamVibePricing />
      <StreamVibeFAQs />
      <CategorySection />
      <CallToAction />
    </main>
  );
}

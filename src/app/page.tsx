"use client";
import { Slider } from "./components/navigation/Slider";
import CategorySection from "./components/sections/CategorySection";
import StreamVibeFAQs from "./components/sections/FaqsSection";
import PricingSection from "./components/sections/PricingSection";
export default function Page() {
  return (
    <main className="max-w-3xl mx-auto p-8">
      <PricingSection />
      <StreamVibeFAQs />
      <CategorySection />
    </main>
  );
}

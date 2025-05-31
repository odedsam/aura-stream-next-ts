'use client';
import DeviceCard from './components/cards/DeviceCard';
import { Slider } from './components/navigation/Slider';
import CategorySection from './components/sections/CategorySection';
import StreamVibeFAQs from './components/sections/FaqsSection';
import PricingSection from './components/sections/PricingSection';
import CallToAction from './layouts/CallToAction';
import { DeviceData } from '@/config/mock';
export default function Page() {
  return (
    <main className="layout">
      <PricingSection />
      <StreamVibeFAQs />
      <CategorySection />
      <CallToAction />
    </main>
  );
}

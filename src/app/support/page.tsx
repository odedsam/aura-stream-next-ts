"use client";

import StreamVibeFAQs from '../components/sections/FaqsSection';
import SupportHero from '../components/sections/SupportHero';
import CallToAction from '../layouts/CallToAction';

export default function page() {
  return (
    <div className="">
      <SupportHero />
      <StreamVibeFAQs />
       <CallToAction />
    </div>
  );
}

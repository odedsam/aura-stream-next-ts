'use client';
import HeroSliderServer from '@/app/components/common/HeroSliderServer';
import CallToAction from '../layouts/CallToAction';

export default async function page() {
  return (
    <main>
      <HeroSliderServer />

      <CallToAction />
    </main>
  );
}

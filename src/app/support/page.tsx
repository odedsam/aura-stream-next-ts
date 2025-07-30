import AuraStreamFAQs from '@/components/sections/FaqsSection';
import SupportHero from '@/components/sections/hero/SupportHero';
import CallToAction from '../layouts/CallToAction';

export default async function page() {
  return (
    <main className="grid mt-14 p-1">
      <SupportHero />
      <AuraStreamFAQs />
      <CallToAction />
    </main>
  );
}

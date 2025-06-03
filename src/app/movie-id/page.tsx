'use-client';
import SmartMovieDetails from '@/features/details/GenreDetailsSidebar';
import { Hero } from '../components/sections/HeroSection';
import AuraStreamPricing from '../components/sections/pricing/PricingSection';
import CallToAction from '../layouts/CallToAction';
import PricingTable from '../components/sections/pricing/PricingTable';

export default function Page() {
  return (
    <main>
      <Hero
        title="Stranger Things"
        description="When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl."
        image="/assets/hero-movie-mobile.png"
      />
      <AuraStreamPricing />
      <PricingTable />
      <SmartMovieDetails />
      <CallToAction />
    </main>
  );
}

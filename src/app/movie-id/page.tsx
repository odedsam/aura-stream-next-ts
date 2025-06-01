'use-client';
import SmartMovieDetails from '@/features/movie-detailes/MovieDetailsSidebar';
import { Hero } from '../components/sections/HeroSection';
import StreamVibePricing from '../components/sections/pricing/PricingSection';
import PricingTable from '../components/sections/pricing/DesktopPricingTable';
import CallToAction from '../layouts/CallToAction';

export default function Page() {
  return (
    <main>
      <Hero
        title="Stranger Things"
        description="When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl."
        image="/assets/hero-movie-mobile.png"
      />
      <StreamVibePricing />
      <PricingTable />
      <SmartMovieDetails />
      <CallToAction />
    </main>
  );
}

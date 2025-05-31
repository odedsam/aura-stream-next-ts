'use-client'
import { Hero } from '../components/sections/HeroSection';
import StreamVibePricing from '../components/sections/PricingSection';

export default function Page() {
  return (
    <main>
      <Hero
        title="Stranger Things"
        description="When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl."
        image="/assets/hero-movie-mobile.png"
      />
        <StreamVibePricing />
    </main>
  );
}

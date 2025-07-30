'use client';
import { BrowseSection } from "@/components/sections/BrowseSection";
import { GenreCarousel } from "@/components/sliders/carousels";
import { OurGenres } from "@/config/categories";
import { useRouter } from "next/navigation";
import DeviceSection from "@/components/sections/DeviceSection";
import AuraStreamFAQs from "@/components/sections/FaqsSection";
import HomeHero from "@/components/sections/hero/HomeHero";
import AuraStreamPricing from "@/components/sections/pricing/PricingSection";

import CallToAction from "./layouts/CallToAction";

export default function Page() {
  const router = useRouter();
  const handleNavigate = () => {
    return router.push('/browse');
  };
  const handleSlideChange = (index: number) => index

  return (
    <main className="layout">
      <HomeHero />
      <BrowseSection className="p-4 rounded-lg">
        <GenreCarousel
          title="Explore Movie Genres"
          className="mx-auto"
          items={OurGenres}
          showControls={true}
          onSlide={handleSlideChange}
          onClick={handleNavigate}
        />
      </BrowseSection>
      <DeviceSection />
      <AuraStreamFAQs />
      <AuraStreamPricing />
      <CallToAction />
    </main>
  );
}

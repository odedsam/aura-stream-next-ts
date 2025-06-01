// import DeviceSection from '../components/sections/DeviceSection';
// import ResponsiveOverlayImage from '../components/images/ResponsiveImageOverlay';
'use client';
import { useState } from 'react';
import { SliderControl } from '../components/sliders/SliderControl';
import { GenreCarouselExamples } from '../components/sliders/carousels/GenreCarousel';
import { BrowseContainerExamples } from '../components/sections/BrowseContainer';

// export default function page() {
//   return (
//     <div className="">
//       <ResponsiveOverlayImage
//         mobileSrc="/assets/hero-home-mobile.webp"
//         tabletSrc="/assets/hero-home-laptop.webp"
//         desktopSrc="/assets/hero-home-desktop.webp"
//         alt="Hero background"
//         className="h-screen"
//       />
//       <DeviceSection />
//     </div>
//   );
// }

export default function page() {
  return (
    <div className="">
      <BrowseContainerExamples />
      <GenreCarouselExamples />
    </div>
  );
}

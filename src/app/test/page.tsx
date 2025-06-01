// import DeviceSection from '../components/sections/DeviceSection';
// import ResponsiveOverlayImage from '../components/images/ResponsiveImageOverlay';

import SupportForm from '../components/forms/SupportForm';
import DeviceSection from '../components/sections/DeviceSection';
import PricingTable from '../components/sections/pricing/PricingTable';

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
    <div className="h-screen my-60">
      {/* <SupportForm /> */}
      <div className="w-[500px] h-[500px] device-gradient"></div>
      <DeviceSection />
    </div>
  );
}

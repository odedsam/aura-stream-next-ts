import ResponsiveOverlayImage from '../components/images/ResponsiveImageOverlay';

export default function page() {
  return (
    <div className="">
      <ResponsiveOverlayImage
        mobileSrc="/assets/hero-home-mobile.svg"
        tabletSrc="/assets/hero-home-laptop.svg"
        desktopSrc="/assets/hero-home-desktop.svg"
        alt="Hero background"
        className="h-screen"
      />
    </div>
  );
}

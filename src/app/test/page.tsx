import { X } from 'lucide-react';
import ResponsiveOverlayImage from '../components/images/ResponsiveImageOverlay';
import { Button } from '../components/ui/Buttons';
import { ArrowRight } from 'lucide-react';

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

      <div className="flex flex-col justify-center items-center w-[600px] h-[600px] mx-auto">
        <div className="inline-flex mx-auto size-[500px] bg-purple-900300 text-center justify-center items-center">
          <Button variant="bordered" size="default" icon={<ArrowRight className="w-5 h-5" />} iconPosition="right">
            Continue
          </Button>
        </div>
      </div>
    </div>
  );
}

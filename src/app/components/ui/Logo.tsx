import Image from "next/image";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
}

export default function Logo({ className }: LogoProps) {
  return (
    <div className={cn(className)}>
      <div className="flex items-center md:hidden">
        <Image src="/assets/logo-mobile.svg" alt="mobile-logo" width={32} height={32} className="mr-2" priority />
        <span className="text-sm font-bold">StreamVibe</span>
      </div>

      <div className="hidden md:flex lg:hidden items-center">
        <Image src="/assets/logo-laptop.svg" alt="laptop-logo" width={64} height={64} className="mr-2" priority />
        <span className="text-md font-bold">StreamVibe</span>
      </div>

      <div className="hidden lg:flex items-center">
        <Image src="/assets/logo-desktop.svg" alt="desktop-logo" width={128} height={128} className="mr-2" priority />
        <span className="text-lg font-bold">StreamVibe</span>
      </div>
    </div>
  );
}

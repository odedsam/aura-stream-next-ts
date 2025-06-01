import Image from 'next/image'
import { forwardRef, ReactNode } from 'react'
import { cn } from '@/lib/utils' // Assuming standard cn utility path

interface ResponsiveOverlayImageProps {
  mobileSrc: string
  tabletSrc: string
  desktopSrc: string
  alt: string
  overlayOpacity?: string
  className?: string
  children?: ReactNode
}

const ResponsiveOverlayImage = forwardRef<HTMLDivElement, ResponsiveOverlayImageProps>(({
  mobileSrc,
  tabletSrc,
  desktopSrc,
  alt,
  overlayOpacity = 'bg-black/50',
  className,
  children
}, ref) => {
  return (
    <div
      ref={ref}
      className={cn('relative overflow-hidden', className)}
    >
      {/* Mobile Image - Loads first for mobile-first approach */}
      <Image
        src={mobileSrc}
        alt={alt}
        fill
        priority // Critical for LCP
        quality={50}
        sizes="(max-width: 767px) 100vw, 0px" // Only load on mobile
        className="object-cover md:hidden"
        loading="eager" // Force immediate loading
        fetchPriority="high" // Browser hint for high priority
      />

      {/* Tablet Image */}
      <Image
        src={tabletSrc}
        alt={alt}
        fill
        priority
        quality={50}
        sizes="(min-width: 768px) and (max-width: 1023px) 100vw, 0px"
        className="object-cover hidden md:block lg:hidden"
        loading="eager"
        fetchPriority="high"
      />

      {/* Desktop Image */}
      <Image
        src={desktopSrc}
        alt={alt}
        fill
        priority
        quality={50}
        sizes="(min-width: 1024px) 100vw, 0px"
        className="object-cover hidden lg:block"
        loading="eager"
        fetchPriority="high"
      />

      {/* Overlay */}
      <div
        className={cn('absolute inset-0 pointer-events-none', overlayOpacity)}
        aria-hidden="true"
      />

      {/* Content */}
      {children && (
        <div className="absolute inset-0 z-10 flex items-center justify-center p-4">
          {children}
        </div>
      )}
    </div>
  )
})

ResponsiveOverlayImage.displayName = 'ResponsiveOverlayImage'

export default ResponsiveOverlayImage

// Ultra-fast usage for hero sections:
/*
<ResponsiveOverlayImage
  mobileSrc="/assets/hero-home-mobile.webp"
  tabletSrc="/assets/hero-home-laptop.webp"
  desktopSrc="/assets/hero-home-desktop.webp"
  alt="Hero background"
  className="h-screen"
>
  <div className="text-center text-white max-w-4xl">
    <h1 className="text-4xl md:text-6xl font-bold mb-4">
      Lightning Fast Loading
    </h1>
    <p className="text-lg md:text-xl opacity-90">
      Optimized for Core Web Vitals
    </p>
  </div>
</ResponsiveOverlayImage>

// Performance Tips:
// 1. Add these images to your public folder exactly as specified
// 2. Optimize SVGs before uploading (remove unnecessary elements)
// 3. Consider using next/dynamic for below-fold images
// 4. Use this component only for above-fold content for best LCP scores
*/

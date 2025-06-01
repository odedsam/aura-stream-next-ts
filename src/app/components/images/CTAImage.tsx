import Image from 'next/image';

interface CTABackgroundProps {
  className?: string;
}

export const CTABackground: React.FC<CTABackgroundProps> = ({ className = "" }) => {
  return (
    <>
      {/* Mobile Image */}
      <div className='w-full relative'>
        <Image
          src="/assets/cta-bg-mobile.webp"
          alt="Call to Action Background"
          width={800}
          height={400}
          className={`w-full h-full object-cover block xl:hidden ${className}`}
          priority
        />
      <div className='cta-background'></div>
      </div>
      {/* Desktop Image (1440px and above) */}
      <Image
        src="/assets/cta-bg-laptop.webp"
        alt="Call to Action Background"
        width={1440}
        height={600}
        className={`w-full h-full object-cover hidden xl:block ${className}`}
        priority
      />
    </>
  );
};

export default CTABackground;

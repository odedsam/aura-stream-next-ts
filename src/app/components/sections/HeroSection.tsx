'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Button } from '../ui/Buttons';

interface HeroProps {
  title: string;
  description: string;
  image: string;
}

export const Hero = ({ title, description, image }: HeroProps) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkSize = () => setIsMobile(window.innerWidth < 1024);
    checkSize();
    window.addEventListener('resize', checkSize);
    return () => window.removeEventListener('resize', checkSize);
  }, []);

  return (
    <section className="text-white bg-primary overflow-hidden">
      {/* Background Image */}
      <div className="w-full max-h-[300px] ">
        <Image src={image} alt="Hero Background" width={1920} height={300} className="w-full h-auto object-cover object-center" priority />
      </div>

      {/* Content */}
      <div className="relative z-10 layout py-20 flex flex-col justify-end gap-6 text-center laptop:text-left laptop:items-start">
        <h1 className="text-3xl laptop:text-5xl font-bold">{title}</h1>
        <p className="text-sm laptop:text-base max-w-md laptop:max-w-xl text-gray-300">{description}</p>
        <div className="flex flex-wrap justify-center laptop:justify-start gap-3 mx-auto">
          <Button variant={'red'}> ▶ Play Now </Button>
          <div className="flex gap-3 items-center">
            <Button className="icon-btn bg-primary p-4 border-[#262626]">+</Button>
            <Button className="icon-btn bg-primary p-4 border-[#262626]">❤️</Button>
            <Button className="icon-btn bg-primary p-4 border-[#262626]">↻</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

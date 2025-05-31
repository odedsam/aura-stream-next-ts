import Image from 'next/image';
import SupportForm from '../forms/SupportForm';
export default function SupportHero() {
  return (
    <div className='flex flex-col gap-6 laptop:flex-row px-20'>
      <div className="flex flex-col justify-center items-center px-3 gap-3">
        <h1 className="font-manrope text-3xl text-white font-bold laptop:text-4xl">Welcome to our support page!</h1>
        <p className="text-gray-def font-manrope text-xs laptop:text-base">
          We're here to help you with any problems you may be having with our product.
        </p>
        <div className="inline-flex justify-center items-center">
          <Image
            src={'/assets/support-hero.png'}
            alt={'hero-image'}
            width={350}
            height={360}
            className="max-h-[360px] max-w-[350px]"></Image>
        </div>
      </div>
      <SupportForm />

    </div>
  );
}

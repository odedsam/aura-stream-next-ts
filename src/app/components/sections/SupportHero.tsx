import Image from 'next/image';
import SupportForm from '../forms/SupportForm';
export default function SupportHero() {
  return (
    <div className="flex flex-col gap-6 laptop:flex-row px-4 my-[200px] font-manrope">
      <div className="inline-flex flex-col px-3 gap-3 justify-center max-w-4xl">
       <div className='max-w-4xl inline-flex flex-col'>
          <h1 className="text-3xl text-white font-bold self-start laptop:text-4xl">Welcome to our support page!</h1>
          <p className="text-gray-def text-xs self-start laptop:text-base">
            We're here to help you with any problems you may be having with our product.
          </p>
       </div>
        <div className='w-full flex max-w-4xl'>
          <Image
            src={'/assets/hero-support.webp'}
            alt={'hero-image'}
            width={360}
            height={360}
            className="w-full h-[22.5rem] laptop:w-[26.815rem] md:h-[23.75rem] obect-fill"
            draggable={false}
          />
        </div>
      </div>
      <SupportForm />
    </div>
  );
}

//  <div className="mb-8">
//         <h2 className="text-2xl font-bold mb-2 text-white">Welcome to our support page!</h2>
//         <p className="text-gray-def text-sm">We're here to help you with any problems you may be having with our product.</p>
//       </div>
//

//

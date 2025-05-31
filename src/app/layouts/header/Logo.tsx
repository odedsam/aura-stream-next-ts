import Image from 'next/image';
export default function Logo() {
  return (
    <div className="flex items-center">
      <div className="flex items-center space-x-2">
        <Image src="/assets/LogoDesktop.svg" alt="logo-icon" width={40} height={40} className="w-8 h-8 lg:w-10 lg:h-10" />
        <span className="text-white font-bold text-lg lg:text-xl">StreamVibe</span>
      </div>
    </div>
  );
}

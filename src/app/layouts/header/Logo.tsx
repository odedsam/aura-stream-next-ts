import Link from 'next/link';
export default function Logo() {
  return (
    <div className="flex items-center">
      <Link href="/">
        <div className="flex items-center space-x-2">
          <span className="text-lg lg:text-xl text-white font-black uppercase tracking-widest drop-shadow-[0_0_10px_rgba(255,0,80,0.8)] animate-pulse">
            AuraStream
          </span>
        </div>
      </Link>
    </div>
  );
}

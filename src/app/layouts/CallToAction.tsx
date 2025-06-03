import { Button } from '@/app/components/ui/Buttons';

export default function CallToAction() {
  return (
    <div
      className="relative rounded-xl px-6 laptop:px-14 py-16 laptop:py-24 flex flex-col laptop:flex-row items-center laptop:items-start justify-between gap-10 font-manrope text-white overflow-hidden shadow-lg"
      style={{
        background: 'linear-gradient(135deg, #141414 0%, #1a1a1a 50%, #262626 100%)',
      }}>
      <div className="text-center laptop:text-left max-w-2xl z-10">
        <h2 className="text-4xl laptop:text-5xl font-extrabold text-white drop-shadow-[0_0_15px_rgba(255,0,80,0.7)]">
          Start your free trial today!
        </h2>
        <p className="text-gray-def text-sm laptop:text-base font-normal mt-4 leading-relaxed">
          Begin your journey into a refined streaming experience. No commitments — just pure,
          immersive content.
        </p>
      </div>

      <div className="z-10">
        <Button
          variant="red"
          className="relative group px-8 py-4 text-sm font-medium uppercase tracking-wide transition duration-300 bg-red-def hover:bg-red-45 border-none rounded-md">
          <span className="relative z-10">Start Free Trial</span>
        </Button>
      </div>
    </div>
  );
}

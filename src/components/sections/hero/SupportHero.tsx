import SupportForm from '@/components/forms/SupportForm';

export default function SupportHero() {
  return (
    <div className="flex flex-col laptop:flex-row px-6 md:px-12 py-12 gap-10 laptop:gap-0 font-manrope bg-black">
      <div className="w-full laptop:w-1/2 flex flex-col justify-center items-start text-left space-y-6">
        <h1 className="text-4xl laptop:text-5xl font-extrabold text-white drop-shadow-[0_0_15px_rgba(255,0,80,0.7)]">
          Need Help? We've Got You.
        </h1>
        <p className="text-gray-300 text-sm laptop:text-base max-w-md">
          Whether you're experiencing issues or just have a question, our support team is ready to
          assist you. Let us know what's going on and we'll get back to you as soon as possible.
        </p>
        <div className="h-1 w-24 bg-gradient-to-r from-red-500 via-pink-500 to-purple-600 rounded-full"></div>
      </div>

      <div className="w-full laptop:w-1/2 flex justify-center items-center bg-white/5 backdrop-blur-md p-6 rounded-xl shadow-xl">
        <SupportForm />
      </div>
    </div>
  );
}

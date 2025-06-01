import { Button } from '../components/ui/Buttons';

export default function CallToAction() {
  return (
    <div className="cta-bg-with-gradient rounded-lg px-7 laptop:px-14 py-12 laptop:py-20 flex flex-col justify-center items-center laptop:flex-row laptop:justify-between laptop:gap-24">
      <div className="font-manrope text-center laptop:text-start">
        <h2 className="font-bold text-2xl laptop:text-3xl mb-2.5">Start your free trial today!</h2>
        <p className="text-gray-def font-semibold text-sm laptop:text-base">
          This is a clear and concise call to action that encourages users to sign up for a free trial of StreamVibe.
        </p>
      </div>
      <div className="pt-12 laptop:pt-0 laptop:self-start">
        <Button variant="red">Start a Free Trial</Button>
      </div>
    </div>
  );
}

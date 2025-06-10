import { PricingCardProps } from '@/types/mock';
import { Button } from '@/app/components/ui/Buttons';
import { formatPrice } from '@/utils';

export const PricingCard: React.FC<PricingCardProps> = ({ plan, billingPeriod, onChoosePlan, onStartFreeTrial }) => {
  const price = billingPeriod === 'yearly' ? plan.price * 12 * 0.8 : plan.price;
  const displayPrice = formatPrice(price);
  const periodText = billingPeriod === 'yearly' ? '/year' : '/month';

  return (
    <div className="bg-quaternary border-2 border-quinary rounded-xl p-8 relative hover:bg-sec transition-colors duration-300 font-manrope">
      {plan.isPopular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span className="bg-red-600 text-white px-4 py-1 rounded-full text-sm font-medium">Most Popular</span>
        </div>
      )}

      <div className="mb-6">
        <h3 className="text-white text-2xl font-bold mb-3">{plan.name}</h3>
        <p className="text-gray-def text-base leading-relaxed mb-6">{plan.description}</p>

        <div className="mb-8">
          <span className="text-white text-4xl font-bold">{displayPrice}</span>
          <span className="text-gray-def text-lg">{periodText}</span>
        </div>
      </div>

      <div className="space-y-3">
        <Button variant="black" className="text-base" full onClick={() => onStartFreeTrial(plan.id)}>
          Start Free Trial
        </Button>

        <Button variant="red" className="text-base" full onClick={() => onChoosePlan(plan.id)}>
          Choose Plan
        </Button>
      </div>
    </div>
  );
};

import { PricingCardProps } from "@/types/mock";

export const PricingCard: React.FC<PricingCardProps> = ({ plan, billingPeriod, onChoosePlan, onStartFreeTrial }) => {
  const displayPrice =
    billingPeriod === 'yearly'
      ? (plan.price * 12 * 0.8).toFixed(2) // 20% discount for yearly
      : plan.price.toFixed(2);

  const periodText = billingPeriod === 'yearly' ? '/year' : '/month';

  return (
    <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-8 relative hover:bg-gray-900/70 transition-colors duration-300">
      {plan.isPopular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span className="bg-red-600 text-white px-4 py-1 rounded-full text-sm font-medium">Most Popular</span>
        </div>
      )}

      <div className="mb-6">
        <h3 className="text-white text-2xl font-bold mb-3">{plan.name}</h3>
        <p className="text-gray-400 text-base leading-relaxed mb-6">{plan.description}</p>

        <div className="mb-8">
          <span className="text-white text-4xl font-bold">${displayPrice}</span>
          <span className="text-gray-400 text-lg">{periodText}</span>
        </div>
      </div>

      <div className="space-y-3">
        <button
          onClick={() => onStartFreeTrial(plan.id)}
          className="w-full bg-transparent border border-gray-600 text-white py-3 px-6 rounded-lg font-medium hover:border-gray-400 transition-colors duration-200">
          Start Free Trial
        </button>

        <button
          onClick={() => onChoosePlan(plan.id)}
          className="w-full bg-red-600 hover:bg-red-700 text-white py-3 px-6 rounded-lg font-medium transition-colors duration-200">
          Choose Plan
        </button>
      </div>
    </div>
  );
};

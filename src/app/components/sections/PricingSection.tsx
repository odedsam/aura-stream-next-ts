import React, { useState } from 'react';

// Types
interface PricingPlan {
  id: string;
  name: string;
  description: string;
  price: number;
  period: 'month' | 'year';
  features?: string[];
  isPopular?: boolean;
}

interface PricingCardProps {
  plan: PricingPlan;
  billingPeriod: 'monthly' | 'yearly';
  onChoosePlan: (planId: string) => void;
  onStartFreeTrial: (planId: string) => void;
}

interface PricingSectionProps {
  title?: string;
  subtitle?: string;
  plans: PricingPlan[];
  onChoosePlan?: (planId: string) => void;
  onStartFreeTrial?: (planId: string) => void;
}

// Pricing Card Component
const PricingCard: React.FC<PricingCardProps> = ({
  plan,
  billingPeriod,
  onChoosePlan,
  onStartFreeTrial
}) => {
  const displayPrice = billingPeriod === 'yearly'
    ? (plan.price * 12 * 0.8).toFixed(2) // 20% discount for yearly
    : plan.price.toFixed(2);

  const periodText = billingPeriod === 'yearly' ? '/year' : '/month';

  return (
    <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-8 relative hover:bg-gray-900/70 transition-colors duration-300">
      {plan.isPopular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span className="bg-red-600 text-white px-4 py-1 rounded-full text-sm font-medium">
            Most Popular
          </span>
        </div>
      )}

      <div className="mb-6">
        <h3 className="text-white text-2xl font-bold mb-3">{plan.name}</h3>
        <p className="text-gray-400 text-base leading-relaxed mb-6">
          {plan.description}
        </p>

        <div className="mb-8">
          <span className="text-white text-4xl font-bold">${displayPrice}</span>
          <span className="text-gray-400 text-lg">{periodText}</span>
        </div>
      </div>

      <div className="space-y-3">
        <button
          onClick={() => onStartFreeTrial(plan.id)}
          className="w-full bg-transparent border border-gray-600 text-white py-3 px-6 rounded-lg font-medium hover:border-gray-400 transition-colors duration-200"
        >
          Start Free Trial
        </button>

        <button
          onClick={() => onChoosePlan(plan.id)}
          className="w-full bg-red-600 hover:bg-red-700 text-white py-3 px-6 rounded-lg font-medium transition-colors duration-200"
        >
          Choose Plan
        </button>
      </div>
    </div>
  );
};

// Pricing Section Component
const PricingSection: React.FC<PricingSectionProps> = ({
  title = "Choose the plan that's right for you",
  subtitle = "Join StreamVibe and select from our flexible subscription options tailored to suit your viewing preferences. Get ready for non-stop entertainment!",
  plans,
  onChoosePlan = (planId: string) => console.log(`Chose plan: ${planId}`),
  onStartFreeTrial = (planId: string) => console.log(`Started free trial: ${planId}`)
}) => {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'yearly'>('monthly');

  return (
    <div className="bg-black min-h-screen py-16 px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-white text-4xl font-bold mb-4">{title}</h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto mb-8">
            {subtitle}
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex bg-gray-900 rounded-lg p-1 mb-12">
            <button
              onClick={() => setBillingPeriod('monthly')}
              className={`px-6 py-2 rounded-md font-medium transition-colors duration-200 ${
                billingPeriod === 'monthly'
                  ? 'bg-gray-700 text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingPeriod('yearly')}
              className={`px-6 py-2 rounded-md font-medium transition-colors duration-200 ${
                billingPeriod === 'yearly'
                  ? 'bg-gray-700 text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Yearly
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {plans.map((plan) => (
            <PricingCard
              key={plan.id}
              plan={plan}
              billingPeriod={billingPeriod}
              onChoosePlan={onChoosePlan}
              onStartFreeTrial={onStartFreeTrial}
            />
          ))}
        </div>

        {/* CTA Section */}
        <div className="relative">
          <div className="bg-gradient-to-r from-red-900/30 to-orange-900/30 rounded-xl p-8 md:p-12 border border-red-900/50 overflow-hidden">
            {/* Background Pattern/Image Placeholder */}
            <div className="absolute inset-0 opacity-20">
              <div className="w-full h-full bg-gradient-to-br from-red-600/20 to-orange-600/20 rounded-xl"></div>
            </div>

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between">
              <div className="mb-6 md:mb-0 md:mr-8">
                <h3 className="text-white text-3xl font-bold mb-3">
                  Start your free trial today!
                </h3>
                <p className="text-gray-300 text-lg">
                  This is a clear and concise call-to-action that encourages users to sign up for a free trial of StreamVibe.
                </p>
              </div>

              <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-medium text-lg transition-colors duration-200 whitespace-nowrap">
                Start a Free Trial
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Example Usage Component with StreamVibe Plans
const StreamVibePricing: React.FC = () => {
  const pricingPlans: PricingPlan[] = [
    {
      id: 'basic',
      name: 'Basic Plan',
      description: 'Enjoy an extensive library of movies and shows, featuring a range of content, including recently released titles.',
      price: 9.99,
      period: 'month'
    },
    {
      id: 'standard',
      name: 'Standard Plan',
      description: 'Access to a wider selection of movies and shows, including most new releases and exclusive content.',
      price: 12.99,
      period: 'month',
      isPopular: true
    },
    {
      id: 'premium',
      name: 'Premium Plan',
      description: 'Access to a widest selection of movies and shows, including all new releases and Offline Viewing.',
      price: 14.99,
      period: 'month'
    }
  ];

  const handleChoosePlan = (planId: string) => {
    console.log(`User chose plan: ${planId}`);
    // Handle plan selection logic here
  };

  const handleStartFreeTrial = (planId: string) => {
    console.log(`User started free trial for plan: ${planId}`);
    // Handle free trial logic here
  };

  return (
    <PricingSection
      plans={pricingPlans}
      onChoosePlan={handleChoosePlan}
      onStartFreeTrial={handleStartFreeTrial}
    />
  );
};

export default StreamVibePricing;
export { PricingCard, PricingSection };
export type { PricingPlan, PricingCardProps, PricingSectionProps };

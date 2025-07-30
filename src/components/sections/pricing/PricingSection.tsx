'use client';

import type { PricingPlan } from '@/types/mock';
import { useState } from 'react';
import { PricingCard } from '@/components/cards/PricingCard';
import { pricingPlans } from '@/config/mock';
import ToggleGroup from '@/components/ui/ToggleGroup';

interface PricingSectionProps {
  title?: string;
  subtitle?: string;
  plans: PricingPlan[];
  onChoosePlan?: (planId: string) => void;
  onStartFreeTrial?: (planId: string) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ title, subtitle, plans, onChoosePlan, onStartFreeTrial }) => {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'yearly'>('monthly');

  const billingOptions: { value: 'monthly' | 'yearly'; label: string }[] = [
    { value: 'monthly', label: 'Monthly' },
    { value: 'yearly', label: 'Yearly' },
  ];

  return (
    <div className="bg-primary py-16 px-8 font-manrope">
      <div className="max-w-7xl mx-auto">
        <div className="text-start mb-10">
          <h2 className="text-white md:text-4xl font-bold mb-4 text-2xl">{title}</h2>
          <p className="text-gray-def text-sm md:text-lg laptop:max-w-3xl mx-auto mb-8">{subtitle}</p>
          <ToggleGroup<'monthly' | 'yearly'> options={billingOptions} selectedValue={billingPeriod} onValueChange={setBillingPeriod} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {plans.map((plan) => (
            <PricingCard
              key={plan.id}
              plan={plan}
              billingPeriod={billingPeriod}
              onChoosePlan={() => onChoosePlan}
              onStartFreeTrial={() => onStartFreeTrial}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const AuraStreamPricing: React.FC = () => {
  const handleChoosePlan = (planId: string) => {
    console.log(`User chose plan: ${planId}`);
  };

  const handleStartFreeTrial = (planId: string) => {
    console.log(`User started free trial for plan: ${planId}`);
  };

  return (
    <PricingSection
      plans={pricingPlans}
      title="Choose the plan that's right for you"
      subtitle="Join AuraStream and select from our flexible subscription options tailored to suit your viewing preferences. Get ready for non-stop entertainment!"
      onChoosePlan={handleChoosePlan}
      onStartFreeTrial={handleStartFreeTrial}
    />
  );
};

export default AuraStreamPricing;

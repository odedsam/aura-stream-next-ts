'use client';

import React, { useState } from 'react';
import type { PricingPlan } from '@/types/mock';
import { PricingCard } from '@/app/components/cards/PricingCard';
import { pricingPlans } from '@/config/mock';
import ToggleGroup from '../../ui/ToggleGroup';

interface PricingSectionProps {
  title?: string;
  subtitle?: string;
  plans: PricingPlan[];
  onChoosePlan?: (planId: string) => void;
  onStartFreeTrial?: (planId: string) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({
  title = "Choose the plan that's right for you",
  subtitle = 'Join StreamVibe and select from our flexible subscription options tailored to suit your viewing preferences. Get ready for non-stop entertainment!',
  plans,
  onChoosePlan = (planId: string) => console.log(`Chose plan: ${planId}`),
  onStartFreeTrial = (planId: string) => console.log(`Started free trial: ${planId}`),
}) => {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'yearly'>('monthly');

  const billingOptions: { value: 'monthly' | 'yearly'; label: string }[] = [
    { value: 'monthly', label: 'Monthly' },
    { value: 'yearly', label: 'Yearly' },
  ];

  return (
    <div className="bg-primary min-h-screen py-16 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-white text-4xl font-bold mb-4">{title}</h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto mb-8">{subtitle}</p>

          <ToggleGroup<'monthly' | 'yearly'>
            options={billingOptions}
            selectedValue={billingPeriod}
            onValueChange={setBillingPeriod}
          />
        </div>

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
      </div>
    </div>
  );
};

const StreamVibePricing: React.FC = () => {
  const handleChoosePlan = (planId: string) => {
    console.log(`User chose plan: ${planId}`);
    // Handle plan selection logic here
  };

  const handleStartFreeTrial = (planId: string) => {
    console.log(`User started free trial for plan: ${planId}`);
    // Handle free trial logic here
  };

  return <PricingSection plans={pricingPlans} onChoosePlan={handleChoosePlan} onStartFreeTrial={handleStartFreeTrial} />;
};

export default StreamVibePricing;

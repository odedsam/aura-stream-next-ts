"use client";

import React, { useState } from 'react';
import type { PricingPlan } from '@/types/mock';
import { PricingCard } from '@/app/components/cards/PricingCard';
import  { pricingPlans } from '@/config/mock';

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

  return (
    <div className="bg-black min-h-screen py-16 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-white text-4xl font-bold mb-4">{title}</h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto mb-8">{subtitle}</p>

          <div className="inline-flex bg-secondary border-2 border-teriary rounded-lg p-1 mb-12">
            <button
              onClick={() => setBillingPeriod('monthly')}
              className={`px-6 py-2 rounded-md font-medium transition-colors duration-200 ${
                billingPeriod === 'monthly' ? 'bg-teriary text-white' : 'text-gray-400 hover:text-white'
              }`}>
              Monthly
            </button>
            <button
              onClick={() => setBillingPeriod('yearly')}
              className={`px-6 py-2 rounded-md font-medium transition-colors duration-200 ${
                billingPeriod === 'yearly' ? 'bg-teriary text-white' : 'text-gray-400 hover:text-white'
              }`}>
              Yearly
            </button>
          </div>
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

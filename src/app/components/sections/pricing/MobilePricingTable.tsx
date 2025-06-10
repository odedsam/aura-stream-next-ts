'use client';
import type { Plan } from '@/types/mock';
import { featureRows, plans } from '@/config/mock';
import { useState } from 'react';
import { Button } from '@/app/components/ui/Buttons';
import ToggleGroup from '@/app/components/ui/ToggleGroup';

interface MobilePricingCardProps {
  plan: Plan;
}

export const MobilePricingCard: React.FC<MobilePricingCardProps> = ({ plan }) => {
  return (
    <div className='grid'>
      <div className="bg-sec p-4 pb-8 sm:p-6 font-manrope font-medium rounded-xl border border-quinary text-sm space-y-4">
        <div className="text-right flex justify-end items-center">
          <span className={`text-white text-xs px-6 py-2 rounded font-medium ${plan.popular ? 'bg-red-600 visible' : 'opacity-0'}`}>
            Popular
          </span>
        </div>
        <div className="grid grid-cols-2 items-center">
          <div>
            <p className="text-gray-def mb-2">Price</p>
            <p className="text-white">{plan.price}</p>
          </div>
          <div>
            <p className="text-gray-def">{featureRows.find((row) => row.key === 'freeTrial')?.label}</p>
            <p className="text-white">{plan.features.freeTrial}</p>
          </div>
        </div>
        {featureRows
          .filter((row) => row.key === 'content' || row.key === 'devices')
          .map((row) => (
            <div key={row.key} className="grid grid-cols-1">
              <div className="flex flex-col">
                <p className="text-gray-def">{row.label}</p>
              </div>
              <div>
                <p className="text-white text-sm font-medium">{plan.features[row.key as keyof typeof plan.features]}</p>
              </div>
            </div>
          ))}
        <div className="grid grid-cols-2">
          {featureRows
            .filter((row) => row.key === 'cancelAnytime')
            .map((row) => (
              <div key={row.key}>
                <p className="text-gray-def">{row.label}</p>
                <p className="text-white">{plan.features[row.key as keyof typeof plan.features]}</p>
              </div>
            ))}
          {featureRows
            .filter((row) => row.key === 'hdr')
            .map((row) => (
              <div key={row.key}>
                <p className="text-gray-def">{row.label}</p>
                <p className="text-white">{plan.features[row.key as keyof typeof plan.features]}</p>
              </div>
            ))}
        </div>
        <div className="grid grid-cols-2">
          {featureRows
            .filter((row) => row.key === 'dolbyAtmos')
            .map((row) => (
              <div key={row.key}>
                <p className="text-gray-def">{row.label}</p>
                <p className="text-white">{plan.features[row.key as keyof typeof plan.features]}</p>
              </div>
            ))}
          {featureRows
            .filter((row) => row.key === 'adFree')
            .map((row) => (
              <div key={row.key}>
                <p className="text-gray-def">{row.label}</p>
                <p className="text-white">{plan.features[row.key as keyof typeof plan.features]}</p>
              </div>
            ))}
        </div>
        <div className="grid grid-cols-2">
          {featureRows
            .filter((row) => row.key === 'offlineViewing')
            .map((row) => (
              <div key={row.key}>
                <p className="text-gray-def">{row.label}</p>
                <p className="text-white text-sm font-medium">{plan.features[row.key as keyof typeof plan.features]}</p>
              </div>
            ))}
          {featureRows
            .filter((row) => row.key === 'familySharing')
            .map((row) => (
              <div key={row.key}>
                <p className="text-gray-def">{row.label}</p>
                <p className="text-white text-sm font-medium">{plan.features[row.key as keyof typeof plan.features]}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export const MobilePricingTable: React.FC = () => {
  const [selectedPlanName, setSelectedPlanName] = useState(plans[1].name);
  const selectedPlan = plans.find((plan) => plan.name === selectedPlanName)!;

  const toggleOptions = plans.map((plan) => ({
    value: plan.name,
    label: plan.name,
  }));

  return (
    <div className="bg-primary text-white p-6 lg:p-12 font-manrope">
      <div className="max-w-7xl">
        <div className="mb-8 flex flex-col">
          <h1 className="text-2xl lg:text-4xl font-bold mb-4">Compare our plans and find the right one for you</h1>
          <p className="text-gray-def text-sm lg:text-base">
            AuraStream offers three different plans to fit your needs: Basic, Standard, and Premium. Compare the features of each plan and
            choose the one that's right for you.
          </p>
        </div>

        <div className="mb-6 flex ">
          <ToggleGroup options={toggleOptions} selectedValue={selectedPlanName} onValueChange={setSelectedPlanName} />
        </div>

        {/* Mobile Card - Showing the selected plan */}
        <MobilePricingCard plan={selectedPlan} />

        <div className="mt-8 text-center">
          <Button variant={selectedPlan.popular ? 'red' : 'dark'} >
            Choose {selectedPlan.name}
          </Button>
        </div>
      </div>
    </div>
  );
};

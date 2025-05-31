import React from 'react';

interface PlanFeatures {
  content: string;
  devices: string;
  freeTrial: string;
  cancelAnytime: string;
  hdr: string;
  dolbyAtmos: string;
  adFree: string;
  offlineViewing: string;
  familySharing: string;
}

interface Plan {
  name: string;
  price: string;
  popular: boolean;
  features: PlanFeatures;
}

const DesktopPricingTable: React.FC = () => {
  const plans: Plan[] = [
    {
      name: 'Basic',
      price: '$9.99/Month',
      popular: false,
      features: {
        content: 'Access to a wide selection of movies and shows, including some new releases.',
        devices: 'Watch on one device simultaneously',
        freeTrial: '7 Days',
        cancelAnytime: 'Yes',
        hdr: 'No',
        dolbyAtmos: 'No',
        adFree: 'No',
        offlineViewing: 'No',
        familySharing: 'No'
      }
    },
    {
      name: 'Standard',
      price: '$12.99/Month',
      popular: true,
      features: {
        content: 'Access to a wider selection of movies and shows, including most new releases and exclusive content',
        devices: 'Watch on Two device simultaneously',
        freeTrial: '7 Days',
        cancelAnytime: 'Yes',
        hdr: 'Yes',
        dolbyAtmos: 'Yes',
        adFree: 'Yes',
        offlineViewing: 'Yes, for select titles.',
        familySharing: 'Yes, up to 5 family members.'
      }
    },
    {
      name: 'Premium',
      price: '$14.99/Month',
      popular: false,
      features: {
        content: 'Access to a widest selection of movies and shows, including all new releases and Offline Viewing',
        devices: 'Watch on Four device simultaneously',
        freeTrial: '7 Days',
        cancelAnytime: 'Yes',
        hdr: 'Yes',
        dolbyAtmos: 'Yes',
        adFree: 'Yes',
        offlineViewing: 'Yes, for all titles.',
        familySharing: 'Yes, up to 6 family members.'
      }
    }
  ];

  const featureRows = [
    { key: 'price', label: 'Price' },
    { key: 'content', label: 'Content' },
    { key: 'devices', label: 'Devices' },
    { key: 'freeTrial', label: 'Free Trail' },
    { key: 'cancelAnytime', label: 'Cancel Anytime' },
    { key: 'hdr', label: 'HDR' },
    { key: 'dolbyAtmos', label: 'Dolby Atmos' },
    { key: 'adFree', label: 'Ad - Free' },
    { key: 'offlineViewing', label: 'Offline Viewing' },
    { key: 'familySharing', label: 'Family Sharing' }
  ];

  return (
    <div className="bg-black text-white p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">
            Compare our plans and find the right one for you
          </h1>
          <p className="text-gray-400 max-w-4xl mx-auto">
            StreamVibe offers three different plans to fit your needs: Basic, Standard, and Premium. Compare the features of each plan and choose the one that's right for you.
          </p>
        </div>

        {/* Desktop Table */}
        <div className="border border-gray-800 rounded-lg overflow-hidden bg-gray-950">
          {/* Header Row */}
          <div className="grid grid-cols-4">
            <div className="p-6 font-semibold border-r border-gray-800 bg-gray-900">
              Features
            </div>
            {plans.map((plan, index) => (
              <div
                key={index}
                className="p-6 text-center border-r border-gray-800 last:border-r-0 relative bg-gray-900"
              >
                <div className="font-semibold text-lg">{plan.name}</div>
                {plan.popular && (
                  <span className="absolute top-3 right-3 bg-red-600 text-white text-xs px-2 py-1 rounded font-medium">
                    Popular
                  </span>
                )}
              </div>
            ))}
          </div>

          {/* Feature Rows */}
          {featureRows.map((row, rowIndex) => (
            <div key={rowIndex} className="grid grid-cols-4 border-t border-gray-800">
              <div className="p-6 font-medium border-r border-gray-800 bg-gray-900 text-gray-200">
                {row.label}
              </div>
              {plans.map((plan, planIndex) => (
                <div
                  key={planIndex}
                  className="p-6 border-r border-gray-800 last:border-r-0 text-sm bg-gray-950"
                >
                  {row.key === 'price' ? (
                    <div className="font-semibold text-base text-white">
                      {plan.price}
                    </div>
                  ) : (
                    <div className="text-gray-300 leading-relaxed">
                      {plan.features[row.key as keyof PlanFeatures]}
                    </div>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="mt-12">
          <div className="grid grid-cols-4 gap-6">
            <div></div> {/* Empty space for features column */}
            {plans.map((plan, index) => (
              <div key={index} className="text-center">
                <button
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-200 ${
                    plan.popular
                      ? 'bg-red-600 hover:bg-red-700 text-white shadow-lg hover:shadow-red-600/25'
                      : 'bg-gray-800 hover:bg-gray-700 text-white border border-gray-700 hover:border-gray-600'
                  }`}
                >
                  Choose {plan.name}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesktopPricingTable;

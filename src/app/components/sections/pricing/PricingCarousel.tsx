import React from 'react';

export const PricingTable: React.FC = () => {
  const plans = [
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
    <div className="bg-black text-white p-6 lg:p-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">
            Compare our plans and find the right one for you
          </h1>
          <p className="text-gray-400 max-w-4xl mx-auto text-sm lg:text-base">
            StreamVibe offers three different plans to fit your needs: Basic, Standard, and Premium. Compare the features of each plan and choose the one that's right for you.
          </p>
        </div>

        {/* Mobile Cards View */}
        <div className="lg:hidden space-y-6">
          {plans.map((plan, index) => (
            <div key={index} className="bg-gray-900 border border-gray-800 rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold">{plan.name}</h3>
                {plan.popular && (
                  <span className="bg-red-600 text-white text-xs px-2 py-1 rounded">
                    Popular
                  </span>
                )}
              </div>
              <div className="text-2xl font-bold mb-6">{plan.price}</div>

              <div className="space-y-4">
                <div>
                  <div className="text-gray-400 text-sm mb-1">Content</div>
                  <div className="text-sm">{plan.features.content}</div>
                </div>
                <div>
                  <div className="text-gray-400 text-sm mb-1">Devices</div>
                  <div className="text-sm">{plan.features.devices}</div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-gray-400 text-sm mb-1">Free Trial</div>
                    <div className="text-sm">{plan.features.freeTrial}</div>
                  </div>
                  <div>
                    <div className="text-gray-400 text-sm mb-1">Cancel Anytime</div>
                    <div className="text-sm">{plan.features.cancelAnytime}</div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-gray-400 text-sm mb-1">HDR</div>
                    <div className="text-sm">{plan.features.hdr}</div>
                  </div>
                  <div>
                    <div className="text-gray-400 text-sm mb-1">Dolby Atmos</div>
                    <div className="text-sm">{plan.features.dolbyAtmos}</div>
                  </div>
                </div>
                <div>
                  <div className="text-gray-400 text-sm mb-1">Ad-Free</div>
                  <div className="text-sm">{plan.features.adFree}</div>
                </div>
                <div>
                  <div className="text-gray-400 text-sm mb-1">Offline Viewing</div>
                  <div className="text-sm">{plan.features.offlineViewing}</div>
                </div>
                <div>
                  <div className="text-gray-400 text-sm mb-1">Family Sharing</div>
                  <div className="text-sm">{plan.features.familySharing}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop Table View */}
        <div className="hidden lg:block">
          <div className="border border-gray-800 rounded-lg overflow-hidden">
            {/* Header Row */}
            <div className="grid grid-cols-4 bg-gray-900">
              <div className="p-6 font-semibold border-r border-gray-800">Features</div>
              {plans.map((plan, index) => (
                <div key={index} className="p-6 text-center border-r border-gray-800 last:border-r-0 relative">
                  <div className="font-semibold">{plan.name}</div>
                  {plan.popular && (
                    <span className="absolute top-2 right-2 bg-red-600 text-white text-xs px-2 py-1 rounded">
                      Popular
                    </span>
                  )}
                </div>
              ))}
            </div>

            {/* Feature Rows */}
            {featureRows.map((row, rowIndex) => (
              <div key={rowIndex} className="grid grid-cols-4 border-t border-gray-800">
                <div className="p-6 font-medium border-r border-gray-800 bg-gray-900">
                  {row.label}
                </div>
                {plans.map((plan, planIndex) => (
                  <div key={planIndex} className="p-6 border-r border-gray-800 last:border-r-0 text-sm">
                    {row.key === 'price' ? (
                      <div className="font-semibold">{plan.price}</div>
                    ) : (
                      <div className="text-gray-300">
                        {plan.features[row.key as keyof typeof plan.features]}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="mt-8 lg:mt-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6">
            {plans.map((plan, index) => (
              <div key={index} className="text-center">
                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                  plan.popular
                    ? 'bg-red-600 hover:bg-red-700 text-white'
                    : 'bg-gray-800 hover:bg-gray-700 text-white border border-gray-700'
                }`}>
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

export default PricingTable;

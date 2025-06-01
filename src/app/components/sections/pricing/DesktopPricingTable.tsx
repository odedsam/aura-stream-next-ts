import type { PlanFeatures } from '@/types';
import { featureRows, plans } from '@/config/mock';
import { Button } from '@/app/components/ui/Buttons';

export const DesktopPricingTable: React.FC = () => {
  return (
    <div className="bg-primary text-white p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Compare our plans and find the right one for you</h1>
          <p className="text-gray-400 max-w-4xl mx-auto">
            StreamVibe offers three different plans to fit your needs: Basic, Standard, and Premium. Compare the features of each plan and
            choose the one that's right for you.
          </p>
        </div>

        {/* Desktop Table */}
        <div className="border border-quinary rounded-lg overflow-hidden bg-sec">
          {/* Header Row */}
          <div className="grid grid-cols-4 bg-sec">
            <div className="p-6 font-semibold border-r border-quinary text-white">Features</div>
            {plans.map((plan, index) => (
              <div key={index} className="p-6 text-center border-r border-quinary last:border-r-0 relative text-white">
                <div className="font-semibold text-lg">{plan.name}</div>
                {plan.popular && (
                  <span className="absolute top-3 right-3 bg-red-600 text-white text-xs px-2 py-1 rounded font-medium">Popular</span>
                )}
              </div>
            ))}
          </div>

          {/* Feature Rows */}
          {featureRows.map((row, rowIndex) => (
            <div key={rowIndex} className="grid grid-cols-4 border-t border-quinary">
              <div className="p-6 font-medium border-r border-quinary text-gray-200 bg-sec">{row.label}</div>
              {plans.map((plan, planIndex) => (
                <div key={planIndex} className="p-6 border-r border-quinary last:border-r-0 text-sm text-gray-300 bg-primary">
                  {row.key === 'price' ? (
                    <div className="font-semibold text-base text-white">{plan.price}</div>
                  ) : (
                    <div className="leading-relaxed">{plan.features[row.key as keyof PlanFeatures]}</div>
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
                <Button
                  variant={plan.popular ? 'red' : 'black'}
                  className="w-full py-3 px-6 rounded-lg font-semibold transition-all duration-200">
                  Choose {plan.name}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};


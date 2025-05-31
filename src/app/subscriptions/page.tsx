'use-client';

import StreamVibePricing from '../components/sections/pricing/PricingSection';
import PricingTable from '../components/sections/pricing/PricingTable';
import CallToAction from '../layouts/CallToAction';

export default function Page() {
  return (
    <main>
      <StreamVibePricing />
      <PricingTable />
      <CallToAction />
    </main>
  );
}

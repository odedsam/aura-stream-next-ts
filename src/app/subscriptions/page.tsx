import AuraStreamPricing from '@/components/sections/pricing/PricingSection';
import PricingTable from '@/components/sections/pricing/PricingTable';
import CallToAction from '@/app/layouts/CallToAction';

export default async function Page() {
  return (
    <main className="grid mt-28 p-1">
      <AuraStreamPricing />
      <PricingTable />
      <CallToAction />
    </main>
  );
}

'use client';

import { useIsMobile } from '@/hooks/useIsMobile';
import { DesktopPricingTable } from './DesktopPricingTable';
import { MobilePricingTable } from './MobilePricingTable';

const PricingTable: React.FC = () => {
  const isMobile = useIsMobile(1440);

  return <div>{isMobile ? <MobilePricingTable /> : <DesktopPricingTable />}</div>;
};

export default PricingTable;

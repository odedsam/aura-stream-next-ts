export interface PricingPlan {
  id: string;
  name: string;
  description: string;
  price: number;
  period: 'month' | 'year';
  features?: string[];
  isPopular?: boolean;
}

export interface PricingCardProps {
  plan: PricingPlan;
  billingPeriod: 'monthly' | 'yearly';
  onChoosePlan: (planId: string) => void;
  onStartFreeTrial: (planId: string) => void;
}

export interface PricingSectionProps {
  title?: string;
  subtitle?: string;
  plans: PricingPlan[];
  onChoosePlan?: (planId: string) => void;
  onStartFreeTrial?: (planId: string) => void;
}

export interface DeviceData {
  id: number;
  title: string;
  description: string;
  iconPath: string;
}
export interface Movie {
  id: number;
  title: string;
  description: string;
  image: string;
  genre?: string;
  rating?: string;
  year?: number;
}
export interface FAQItem {
  question: string;
  answer: string;
}




export interface FAQCardProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  number: number;
}

export type FaqHeaderProps = {
  title?: string;
  subtitle?: string;
  onAskQuestion?: () => void;
};

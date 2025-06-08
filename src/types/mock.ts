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

export interface MovieCatalog {
  id: number;
  title: string;
  poster: string;
  category: string;
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

export interface Episode {
  id: string;
  number: number;
  title: string;
  description: string;
  duration: string;
  thumbnail: string;
  releaseDate?: string;
}

export interface SeasonMock {
  id: string;
  number: number;
  title: string;
  episodeCount: number;
  episodes: Episode[];
  description?: string;
}

export interface PlanFeatures {
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

export interface Plan {
  name: string;
  price: string;
  popular: boolean;
  features: PlanFeatures;
}

export type Country = {
  code: string;
  name: string;
  flag: string;
  dialCode: string;
};
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
export interface PricingPlan {
  id: string;
  name: string;
  description: string;
  price: number;
  period: 'month' | 'year';
  features?: string[];
  isPopular?: boolean;
}

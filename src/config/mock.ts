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

export const devicesData: DeviceData[] = [
  {
    id: 1,
    title: 'Smartphones',
    description:
      'StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store',
    iconPath: '/icons/smart-phones.svg',
  },
  {
    id: 2,
    title: 'Tablet',
    description:
      'StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store',
    iconPath: '/icons/tablet.svg',
  },
  {
    id: 3,
    title: 'Smart TV',
    description:
      'StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store',
    iconPath: '/icons/smart-tv.svg',
  },
  {
    id: 4,
    title: 'Laptops',
    description:
      'StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store',
    iconPath: '/icons/laptops.svg',
  },
  {
    id: 5,
    title: 'Gaming Consoles',
    description:
      'StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store',
    iconPath: '/icons/gaming-consoles.svg',
  },
  {
    id: 6,
    title: 'VR Headsets',
    description:
      'StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store',
    iconPath: '/icons/vrheadsets.svg',
  },
];

export const sampleMovies: Movie[] = [
  {
    id: 1,
    title: 'Avengers: Endgame',
    description:
      "With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos's actions and undo the chaos to the universe, no matter what consequences may be in store, and no matter who they face... Avenge the fallen.",
    image: '/assets/hero-browse-desktop.png',
    genre: 'Action',
    rating: 'PG-13',
    year: 2019,
  },
  {
    id: 2,
    title: 'Spider-Man: No Way Home',
    description:
      "Peter Parker's secret identity is revealed to the entire world. Desperate for help, Peter turns to Doctor Strange to make the world forget that he is Spider-Man.",
    image: '/assets/hero-browse-desktop.png',
    genre: 'Action',
    rating: 'PG-13',
    year: 2021,
  },
  {
    id: 3,
    title: 'The Batman',
    description:
      "When a sadistic serial killer begins murdering key political figures in Gotham, Batman is forced to investigate the city's hidden corruption and question his family's involvement.",
    image: '/assets/hero-browse-desktop.png',
    genre: 'Action',
    rating: 'PG-13',
    year: 2022,
  },
  {
    id: 4,
    title: 'Stranger Things',
    description:
      'When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces, and one strange little girl.',
    image: '/assets/hero-browse-desktop.png',
    genre: 'Sci-Fi',
    rating: 'TV-14',
    year: 2016,
  },
  {
    id: 5,
    title: 'The Witcher',
    description:
      'Geralt of Rivia, a solitary monster hunter, struggles to find his place in a world where people often prove more wicked than beasts.',
    image: '/assets/hero-browse-desktop.png',
    genre: 'Fantasy',
    rating: 'TV-MA',
    year: 2019,
  },
];

export const faqData: FAQItem[] = [
  {
    question: 'What is StreamVibe?',
    answer: 'StreamVibe is a streaming service that allows you to watch movies and shows on demand.',
  },
  {
    question: 'How much does StreamVibe cost?',
    answer:
      'StreamVibe offers three subscription plans: Basic Plan at $9.99/month, Standard Plan at $12.99/month, and Premium Plan at $14.99/month. Each plan comes with different features and content access levels.',
  },
  {
    question: 'What content is available on StreamVibe?',
    answer:
      'StreamVibe offers an extensive library of movies and TV shows across various genres, including the latest releases, classic films, documentaries, and exclusive original content.',
  },
  {
    question: 'How can I watch StreamVibe?',
    answer:
      'You can watch StreamVibe on multiple devices including smartphones, tablets, smart TVs, laptops, and desktop computers. Our platform is accessible through web browsers and dedicated mobile apps.',
  },
  {
    question: 'How do I sign up for StreamVibe?',
    answer:
      'Signing up for StreamVibe is easy! Simply visit our website, choose your preferred subscription plan, create an account with your email, and provide payment information. You can start watching immediately after registration.',
  },
  {
    question: 'What is the StreamVibe free trial?',
    answer:
      'StreamVibe offers a free trial period for new subscribers. During this trial, you can explore our full content library and features without any charges. The trial duration varies by plan.',
  },
  {
    question: 'How do I contact StreamVibe customer support?',
    answer:
      'You can reach our customer support team through multiple channels: email support, live chat on our website, or phone support. Our team is available 24/7 to assist with any questions or technical issues.',
  },
  {
    question: 'What are the StreamVibe payment methods?',
    answer:
      'StreamVibe accepts various payment methods including major credit cards (Visa, MasterCard, American Express), PayPal, and digital wallets. All payments are processed securely through encrypted channels.',
  },
];

export const pricingPlans: PricingPlan[] = [
  {
    id: 'basic',
    name: 'Basic Plan',
    description: 'Enjoy an extensive library of movies and shows, featuring a range of content, including recently released titles.',
    price: 9.99,
    period: 'month',
  },
  {
    id: 'standard',
    name: 'Standard Plan',
    description: 'Access to a wider selection of movies and shows, including most new releases and exclusive content.',
    price: 12.99,
    period: 'month',
    isPopular: true,
  },
  {
    id: 'premium',
    name: 'Premium Plan',
    description: 'Access to a widest selection of movies and shows, including all new releases and Offline Viewing.',
    price: 14.99,
    period: 'month',
  },
];

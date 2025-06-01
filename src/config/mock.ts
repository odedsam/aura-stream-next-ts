import { Country, MovieCatalog, Plan, SeasonMock, DeviceData, Movie, FAQItem, PricingPlan } from '@/types';

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
    iconPath: '/icons/vrheadset.svg',
  },
];

export const sampleMovies: Movie[] = [
  {
    id: 1,
    title: 'Avengers: Endgame',
    description:
      "With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos's actions and undo the chaos to the universe, no matter what consequences may be in store, and no matter who they face... Avenge the fallen.",
    image: '/assets/hero-browse-desktop.svg',
    genre: 'Action',
    rating: 'PG-13',
    year: 2019,
  },
  {
    id: 2,
    title: 'Spider-Man: No Way Home',
    description:
      "Peter Parker's secret identity is revealed to the entire world. Desperate for help, Peter turns to Doctor Strange to make the world forget that he is Spider-Man.",
    image: '/assets/hero-browse-desktop.svg',
    genre: 'Action',
    rating: 'PG-13',
    year: 2021,
  },
  {
    id: 3,
    title: 'The Batman',
    description:
      "When a sadistic serial killer begins murdering key political figures in Gotham, Batman is forced to investigate the city's hidden corruption and question his family's involvement.",
    image: '/assets/hero-browse-desktop.svg',
    genre: 'Action',
    rating: 'PG-13',
    year: 2022,
  },
  {
    id: 4,
    title: 'Stranger Things',
    description:
      'When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces, and one strange little girl.',
    image: '/assets/hero-browse-desktop.svg',
    genre: 'Sci-Fi',
    rating: 'TV-14',
    year: 2016,
  },
  {
    id: 5,
    title: 'The Witcher',
    description:
      'Geralt of Rivia, a solitary monster hunter, struggles to find his place in a world where people often prove more wicked than beasts.',
    image: '/assets/hero-browse-desktop.svg',
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

export const categories = [
  { name: 'Action', count: 120, icon: '🎬' },
  { name: 'Adventure', count: 85, icon: '🗺️' },
  { name: 'Comedy', count: 95, icon: '😄' },
  { name: 'Drama', count: 110, icon: '🎭' },
];

export const moviesCatalog: MovieCatalog[] = [
  { id: 1, title: 'Avengers', poster: '/api/placeholder/200/300', category: 'Action' },
  { id: 2, title: 'The Batman', poster: '/api/placeholder/200/300', category: 'Action' },
  { id: 3, title: 'Spider-Man', poster: '/api/placeholder/200/300', category: 'Action' },
  { id: 4, title: 'Dune', poster: '/api/placeholder/200/300', category: 'Sci-Fi' },
  { id: 5, title: 'Top Gun', poster: '/api/placeholder/200/300', category: 'Action' },
  { id: 6, title: 'Black Widow', poster: '/api/placeholder/200/300', category: 'Action' },
  { id: 7, title: 'Matrix', poster: '/api/placeholder/200/300', category: 'Sci-Fi' },
  { id: 8, title: 'Wonder Woman', poster: '/api/placeholder/200/300', category: 'Action' },
  { id: 9, title: 'Joker', poster: '/api/placeholder/200/300', category: 'Drama' },
  { id: 10, title: 'Aquaman', poster: '/api/placeholder/200/300', category: 'Action' },
  { id: 11, title: 'Thor', poster: '/api/placeholder/200/300', category: 'Action' },
  { id: 12, title: 'Captain Marvel', poster: '/api/placeholder/200/300', category: 'Action' },
  { id: 13, title: 'Iron Man', poster: '/api/placeholder/200/300', category: 'Action' },
  { id: 14, title: 'Guardians', poster: '/api/placeholder/200/300', category: 'Action' },
  { id: 15, title: 'Ant-Man', poster: '/api/placeholder/200/300', category: 'Action' },
  { id: 16, title: 'Doctor Strange', poster: '/api/placeholder/200/300', category: 'Action' },
  { id: 17, title: 'Black Panther', poster: '/api/placeholder/200/300', category: 'Action' },
  { id: 18, title: 'Captain America', poster: '/api/placeholder/200/300', category: 'Action' },
  { id: 19, title: 'Hulk', poster: '/api/placeholder/200/300', category: 'Action' },
  { id: 20, title: 'Deadpool', poster: '/api/placeholder/200/300', category: 'Comedy' },
];

export const seasonsEpisodesMock: SeasonMock[] = [
  {
    id: 'season-1',
    number: 1,
    title: 'Season One',
    episodeCount: 8,
    description:
      'When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange girl.',
    episodes: [
      {
        id: 'ep-1-1',
        number: 1,
        title: 'Chapter One: The Vanishing of Will Byers',
        description:
          'After a young boy vanishes, his mother, a police chief and his friends must confront terrifying supernatural forces in order to get him back.',
        duration: '47 min',
        thumbnail: 'https://via.placeholder.com/200x120/FFC107/000000?Text=Episode+1',
        releaseDate: '2016-07-15',
      },
      {
        id: 'ep-1-2',
        number: 2,
        title: 'Chapter Two: The Weirdo on Maple Street',
        description:
          'Lucas, Mike and Dustin try to talk to the girl they found in the woods. Hopper questions an anxious Joyce about an unsettling phone call.',
        duration: '55 min',
        thumbnail: 'https://via.placeholder.com/200x120/4CAF50/FFFFFF?Text=Episode+2',
      },
      {
        id: 'ep-1-3',
        number: 3,
        title: 'Chapter Three: Holly, Jolly',
        description:
          'An increasingly concerned Nancy looks for Barb and finds out what Jonathan has been up to. Joyce is convinced Will is trying to talk to her.',
        duration: '52 min',
        thumbnail: 'https://via.placeholder.com/200x120/F44336/FFFFFF?Text=Episode+3',
      },
      {
        id: 'ep-1-4',
        number: 4,
        title: 'Chapter Four: The Body',
        description:
          'Refusing to believe Will is dead, Joyce and Hopper team up to investigate what happened to him. Hopper breaks into the lab.',
        duration: '50 min',
        thumbnail: 'https://via.placeholder.com/200x120/2196F3/FFFFFF?Text=Episode+4',
      },
      {
        id: 'ep-1-5',
        number: 5,
        title: 'Chapter Five: The Flea and the Acrobat',
        description: '...',
        duration: '51 min',
        thumbnail: 'https://via.placeholder.com/200x120/9C27B0/FFFFFF?Text=Episode+5',
      },
      {
        id: 'ep-1-6',
        number: 6,
        title: 'Chapter Six: The Monster',
        description: '...',
        duration: '51 min',
        thumbnail: 'https://via.placeholder.com/200x120/673AB7/FFFFFF?Text=Episode+6',
      },
      {
        id: 'ep-1-7',
        number: 7,
        title: 'Chapter Seven: The Bathtub',
        description: '...',
        duration: '47 min',
        thumbnail: 'https://via.placeholder.com/200x120/3F51B5/FFFFFF?Text=Episode+7',
      },
      {
        id: 'ep-1-8',
        number: 8,
        title: 'Chapter Eight: The Upside Down',
        description: '...',
        duration: '53 min',
        thumbnail: 'https://via.placeholder.com/200x120/00BCD4/FFFFFF?Text=Episode+8',
      },
    ],
  },
  {
    id: 'season-2',
    number: 2,
    title: 'Season Two',
    episodeCount: 9,
    description:
      "It's 1984 and the citizens of Hawkins, Indiana are still reeling from the horrors of the demogorgon and the secrets of Hawkins Lab.",
    episodes: [
      {
        id: 'ep-2-1',
        number: 1,
        title: 'Chapter One: MADMAX',
        description:
          'As the town preps for Halloween, a high-scoring rival shakes things up in the arcade, and a skeptical Hopper inspects a field of rotting pumpkins.',
        duration: '48 min',
        thumbnail: 'https://via.placeholder.com/200x120/E91E63/FFFFFF?Text=Season+2+Ep+1',
      },
      {
        id: 'ep-2-2',
        number: 2,
        title: 'Chapter Two: Trick or Treat, Freak',
        description:
          'After Will sees something terrible on his trick-or-treat Halloween night, Mike wonders whether Eleven is still out there. Nancy wrestles with the truth about Barb.',
        duration: '53 min',
        thumbnail: 'https://via.placeholder.com/200x120/9E9E9E/FFFFFF?Text=Season+2+Ep+2',
      },
      {
        id: 'ep-2-3',
        number: 3,
        title: 'Chapter Three: The Pollywog',
        description: '...',
        duration: '51 min',
        thumbnail: 'https://via.placeholder.com/200x120/607D8B/FFFFFF?Text=Season+2+Ep+3',
      },
      {
        id: 'ep-2-4',
        number: 4,
        title: 'Chapter Four: Will the Wise',
        description: '...',
        duration: '55 min',
        thumbnail: 'https://via.placeholder.com/200x120/009688/FFFFFF?Text=Season+2+Ep+4',
      },
      {
        id: 'ep-2-5',
        number: 5,
        title: 'Chapter Five: Dig Dug',
        description: '...',
        duration: '53 min',
        thumbnail: 'https://via.placeholder.com/200x120/795548/FFFFFF?Text=Season+2+Ep+5',
      },
      {
        id: 'ep-2-6',
        number: 6,
        title: 'Chapter Six: The Spy',
        description: '...',
        duration: '57 min',
        thumbnail: 'https://via.placeholder.com/200x120/FF9800/FFFFFF?Text=Season+2+Ep+6',
      },
      {
        id: 'ep-2-7',
        number: 7,
        title: 'Chapter Seven: The Lost Sister',
        description: '...',
        duration: '50 min',
        thumbnail: 'https://via.placeholder.com/200x120/3F51B5/FFFFFF?Text=Season+2+Ep+7',
      },
      {
        id: 'ep-2-8',
        number: 8,
        title: 'Chapter Eight: The Mind Flayer',
        description: '...',
        duration: '52 min',
        thumbnail: 'https://via.placeholder.com/200x120/9C27B0/FFFFFF?Text=Season+2+Ep+8',
      },
      {
        id: 'ep-2-9',
        number: 9,
        title: 'Chapter Nine: The Gate',
        description: '...',
        duration: '62 min',
        thumbnail: 'https://via.placeholder.com/200x120/673AB7/FFFFFF?Text=Season+2+Ep+9',
      },
    ],
  },
  {
    id: 'season-3',
    number: 3,
    title: 'Season Three',
    episodeCount: 8,
    description:
      "It's 1985 in Hawkins, Indiana, and summer's heating up. School's out, there's a brand new mall in town, and the Hawkins crew are on the cusp of adulthood.",
    episodes: [
      {
        id: 'ep-3-1',
        number: 1,
        title: 'Chapter One: Suzie, Do You Copy?',
        description:
          "Summer brings new jobs and budding romance. But the mood shifts when Dustin's radio picks up a Russian broadcast, and Will senses something is wrong.",
        duration: '50 min',
        thumbnail: 'https://via.placeholder.com/200x120/00BCD4/FFFFFF?Text=Season+3+Ep+1',
      },
      {
        id: 'ep-3-2',
        number: 2,
        title: 'Chapter Two: The Mall Rats',
        description: '...',
        duration: '59 min',
        thumbnail: 'https://via.placeholder.com/200x120/E91E63/FFFFFF?Text=Season+3+Ep+2',
      },
      {
        id: 'ep-3-3',
        number: 3,
        title: 'Chapter Three: The Case of the Missing Lifeguard',
        description: '...',
        duration: '49 min',
        thumbnail: 'https://via.placeholder.com/200x120/4CAF50/FFFFFF?Text=Season+3+Ep+3',
      },
      {
        id: 'ep-3-4',
        number: 4,
        title: 'Chapter Four: The Sauna Test',
        description: '...',
        duration: '52 min',
        thumbnail: 'https://via.placeholder.com/200x120/F44336/FFFFFF?Text=Season+3+Ep+4',
      },
      {
        id: 'ep-3-5',
        number: 5,
        title: 'Chapter Five: The Flayed',
        description: '...',
        duration: '50 min',
        thumbnail: 'https://via.placeholder.com/200x120/2196F3/FFFFFF?Text=Season+3+Ep+5',
      },
      {
        id: 'ep-3-6',
        number: 6,
        title: 'Chapter Six: E Pluribus Unum',
        description: '...',
        duration: '59 min',
        thumbnail: 'https://via.placeholder.com/200x120/9C27B0/FFFFFF?Text=Season+3+Ep+6',
      },
      {
        id: 'ep-3-7',
        number: 7,
        title: 'Chapter Seven: The Bite',
        description: '...',
        duration: '55 min',
        thumbnail: 'https://via.placeholder.com/200x120/673AB7/FFFFFF?Text=Season+3+Ep+7',
      },
      {
        id: 'ep-3-8',
        number: 8,
        title: 'Chapter Eight: The Battle of Starcourt',
        description: '...',
        duration: '77 min',
        thumbnail: 'https://via.placeholder.com/200x120/3F51B5/FFFFFF?Text=Season+3+Ep+8',
      },
    ],
  },
];

export const plans: Plan[] = [
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
      familySharing: 'No',
    },
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
      familySharing: 'Yes, up to 5 family members.',
    },
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
      familySharing: 'Yes, up to 6 family members.',
    },
  },
];

export const featureRows = [
  { key: 'price', label: 'Price' },
  { key: 'content', label: 'Content' },
  { key: 'devices', label: 'Devices' },
  { key: 'freeTrial', label: 'Free Trail' },
  { key: 'cancelAnytime', label: 'Cancel Anytime' },
  { key: 'hdr', label: 'HDR' },
  { key: 'dolbyAtmos', label: 'Dolby Atmos' },
  { key: 'adFree', label: 'Ad - Free' },
  { key: 'offlineViewing', label: 'Offline Viewing' },
  { key: 'familySharing', label: 'Family Sharing' },
];

export const countries: Country[] = [
  {
    code: 'IN',
    name: 'Ind',
    flag: 'https://flagcdn.com/w40/in.png',
    dialCode: '+91',
  },
  {
    code: 'US',
    name: 'US',
    flag: 'https://flagcdn.com/w40/us.png',
    dialCode: '+1',
  },
  {
    code: 'IL',
    name: 'ISR',
    flag: 'https://flagcdn.com/w40/il.png',
    dialCode: '+972',
  },
];

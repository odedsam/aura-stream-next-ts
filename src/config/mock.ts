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

export const devicesData: DeviceData[] = [
  {
    id: 1,
    title: "Smartphones",
    description:
      "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store",
    iconPath: "/icons/smart-phones.svg",
  },
  {
    id: 2,
    title: "Tablet",
    description:
      "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store",
    iconPath: "/icons/tablet.svg",
  },
  {
    id: 3,
    title: "Smart TV",
    description:
      "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store",
    iconPath: "/icons/smart-tv.svg",
  },
  {
    id: 4,
    title: "Laptops",
    description:
      "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store",
    iconPath: "/icons/laptops.svg",
  },
  {
    id: 5,
    title: "Gaming Consoles",
    description:
      "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store",
    iconPath: "/icons/gaming-consoles.svg",
  },
  {
    id: 6,
    title: "VR Headsets",
    description:
      "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store",
    iconPath: "/icons/vrheadsets.svg",
  },
];

export const sampleMovies: Movie[] = [
  {
    id: 1,
    title: "Avengers: Endgame",
    description:
      "With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos's actions and undo the chaos to the universe, no matter what consequences may be in store, and no matter who they face... Avenge the fallen.",
    image: "/assets/hero-browse-desktop.png",
    genre: "Action",
    rating: "PG-13",
    year: 2019,
  },
  {
    id: 2,
    title: "Spider-Man: No Way Home",
    description:
      "Peter Parker's secret identity is revealed to the entire world. Desperate for help, Peter turns to Doctor Strange to make the world forget that he is Spider-Man.",
    image: "/assets/hero-browse-desktop.png",
    genre: "Action",
    rating: "PG-13",
    year: 2021,
  },
  {
    id: 3,
    title: "The Batman",
    description:
      "When a sadistic serial killer begins murdering key political figures in Gotham, Batman is forced to investigate the city's hidden corruption and question his family's involvement.",
    image: "/assets/hero-browse-desktop.png",
    genre: "Action",
    rating: "PG-13",
    year: 2022,
  },
  {
    id: 4,
    title: "Stranger Things",
    description:
      "When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces, and one strange little girl.",
    image: "/assets/hero-browse-desktop.png",
    genre: "Sci-Fi",
    rating: "TV-14",
    year: 2016,
  },
  {
    id: 5,
    title: "The Witcher",
    description:
      "Geralt of Rivia, a solitary monster hunter, struggles to find his place in a world where people often prove more wicked than beasts.",
    image: "/assets/hero-browse-desktop.png",
    genre: "Fantasy",
    rating: "TV-MA",
    year: 2019,
  },
];

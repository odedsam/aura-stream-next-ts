import { MovieCastMember, Review } from '@/types/components';

export const MovieDetailsAPI = {
  releaseYear: 2022,
  languages: ['English', 'Hindi', 'Tamil', 'Telugu', 'Kannada'],
  ratings: [
    { platform: 'IMDb', rating: 4.5, maxRating: 5 },
    { platform: 'AuraStream', rating: 4, maxRating: 5 },
  ],
  genres: ['Sci-Fi TV', 'Teen TV Shows', 'US TV Shows'],
  director: [{ name: 'The Duffer Brothers', country: 'USA', image: null }],
  music: [{ name: 'Kyle Dixon', country: 'USA', image: null }],
};

export const castMembers: MovieCastMember[] = [
  { id: 1, name: 'Winona Ryder', image: '/api/placeholder/80/80' },
  { id: 2, name: 'David Harbour', image: '/api/placeholder/80/80' },
  { id: 3, name: 'Millie Bobby Brown', image: '/api/placeholder/80/80' },
  { id: 4, name: 'Finn Wolfhard', image: '/api/placeholder/80/80' },
  { id: 5, name: 'Gaten Matarazzo', image: '/api/placeholder/80/80' },
  { id: 6, name: 'Caleb McLaughlin', image: '/api/placeholder/80/80' },
  { id: 7, name: 'Noah Schnapp', image: '/api/placeholder/80/80' },
  { id: 8, name: 'Sadie Sink', image: '/api/placeholder/80/80' },
];

export const reviews: Review[] = [
  {
    id: 1,
    name: 'Aniket Roy',
    location: 'From India',
    rating: 4.5,
    content:
      "This movie was recommended to me by a very dear friend who went for the movie by herself. I went to the cinemas to watch but had a houseful board so couldn't watch it.",
  },
  {
    id: 2,
    name: 'Swaraj',
    location: 'From India',
    rating: 5,
    content:
      'A restless king promises his lands to the local tribals in exchange of a stone (Panjurli, a deity of Keradi Village) wherein he finds solace and peace of mind.',
  },
  {
    id: 3,
    name: 'Priya Sharma',
    location: 'From Mumbai',
    rating: 4,
    content:
      'An incredible cinematic experience that keeps you on the edge of your seat. The supernatural elements are beautifully woven into the narrative.',
  },
];

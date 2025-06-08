export interface SpokenLanguage {
  english_name: string;
}

export interface Genre {
  id: number;
  name: string;
}

export interface CrewMember {
  job: string;
  department: string;
  name: string;
}

export interface CastMember {
  id: number;
  name: string;
  character: string;
  profile_path?: string | null;
}




export interface Review {
  id: string;
  author: string;
  content: string;
  created_at: string;
}

export interface Movie {
  id: number;
  title: string;
  overview: string;
  release_date: string;
  spoken_languages: SpokenLanguage[];
  genres: Genre[];
  vote_average: number;
  credits?: {
    crew: CrewMember[];
  };
}

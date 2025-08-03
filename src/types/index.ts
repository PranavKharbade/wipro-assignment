export interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  gender: string;
  image: string;
  url: string;
  created: string;
}

export interface CharacterResponse {
  info: {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  };
  results: Character[];
} 
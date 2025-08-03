import { Character, CharacterResponse } from '../types';

export const fetchCharacters = async (page: number = 1): Promise<CharacterResponse> => {
  const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`);
  if (!response.ok) throw new Error("Failed to fetch characters");
  return response.json();
};

export const fetchCharacterById = async (id: string): Promise<Character> => {
  const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
  if (!response.ok) throw new Error("Failed to fetch character");
  return response.json();
};

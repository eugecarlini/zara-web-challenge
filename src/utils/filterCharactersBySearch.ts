import { Character } from "@/types/character";

const hasSearchTerm = (
  field: string | null | undefined,
  searchTerm: string
): boolean => {
  return field ? field.toLowerCase().includes(searchTerm.toLowerCase()) : false;
};

const filterCharactersBySearch = (
  characters: Character[] | null | undefined,
  searchTerm: string
): Character[] => {
  if (!characters) return [];
  return characters.filter(({ name }) => hasSearchTerm(name, searchTerm));
};

export default filterCharactersBySearch;

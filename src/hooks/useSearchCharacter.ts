import { useState } from "react";
import filterCharactersBySearch from "@/utils/filterCharactersBySearch";
import { Character } from "@/types/character";

const useSearchCharacters = (characters: Character[]) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setSearchTerm((e.target as HTMLInputElement).value);
    }
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const filteredList: Character[] = filterCharactersBySearch(
    characters,
    searchTerm
  );

  return {
    searchTerm,
    handleKeyDown,
    handleOnChange,
    filteredList,
    charactersCount: filteredList?.length,
  };
};

export default useSearchCharacters;

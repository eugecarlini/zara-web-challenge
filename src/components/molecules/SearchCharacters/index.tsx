import React, { useCallback } from "react";
import useSearchCharacter from "@/hooks/useSearchCharacter";
import { InputSearch } from "@/components/atoms/InputSearch";
import { Tag } from "@/components/atoms/Tag";
import CharacterItemList from "@/components/molecules/CharacterItemList";
import { Character } from "@/types/character";
import "./styles.css";

const SearchCharacters: React.FC<{ characters: Character[] }> = ({
  characters,
}) => {
  const { searchTerm, handleKeyDown, filteredList, charactersCount } =
    useSearchCharacter(characters);

  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
  }, []);

  return (
    <form onSubmit={handleSubmit} data-testid="search-characters-input">
      <div className="search__container">
        <InputSearch value={searchTerm} onKeyDown={handleKeyDown} />
        <Tag text={charactersCount} />
      </div>

      <CharacterItemList characters={filteredList} />
    </form>
  );
};

export default SearchCharacters;

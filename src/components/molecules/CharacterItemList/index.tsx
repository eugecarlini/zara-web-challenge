import React from "react";
import { Character } from "@/types/character";
import CharacterItem from "@/components/molecules/CharacterItem";
import "./styles.css";

interface CharacterItemListProps {
  characters: Character[];
}

const CharacterItemList: React.FC<CharacterItemListProps> = ({
  characters,
}) => (
  <ul className="character__list">
    {characters?.map((character: Character) => (
      <li key={character.id} className="character__list-item">
        <CharacterItem {...character} />
      </li>
    ))}
  </ul>
);

export default CharacterItemList;

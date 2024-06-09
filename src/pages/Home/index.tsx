import { useEffect, useState } from "react";
import { useFavoriteList } from "@/context/FavoritesContext";
import { useCharacters } from "@/context/CharacterContext";
import CharacterItemList from "@/components/molecules/CharacterItemList";
import useFavoriteCharacter from "@/hooks/useFavoriteCharacter";
import { Character } from "@/types/character";

const Home: React.FC = () => {
  const { characters, fetchCharacters, loading, error } = useCharacters();
  const { showFavorites } = useFavoriteList();
  const { getFavoritesFromLocalStorage } = useFavoriteCharacter();
  const [filteredCharacters, setFilteredCharacters] = useState<Character[]>([]);

  useEffect(() => {
    fetchCharacters();
  }, []);

  useEffect(() => {
    if (showFavorites) {
      const favorites = getFavoritesFromLocalStorage();
      const filteredFavs = characters.filter((character) =>
        favorites.includes(character.id)
      );
      setFilteredCharacters(filteredFavs);
    } else {
      setFilteredCharacters(characters);
    }
  }, [showFavorites, characters]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching characters</div>;
  }

  return (
    <>
      {showFavorites && <p>ESTOS SON LOS FAVORITOS:</p>}
      {characters && <CharacterItemList characters={filteredCharacters} />}
    </>
  );
};

export default Home;

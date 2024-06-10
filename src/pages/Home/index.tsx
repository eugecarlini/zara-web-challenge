import { useEffect, useState } from "react";
import { useFavoriteList } from "@/context/FavoritesContext";
import { useCharacters } from "@/context/CharacterContext";
import { Character } from "@/types/character";
import Container from "@/components/atoms/Container";
import SearchCharacters from "@/components/molecules/SearchCharacters";
import "./styles.css";

const Home: React.FC = () => {
  const { characters, fetchCharacters, error } = useCharacters();
  const { showFavorites, favoriteList } = useFavoriteList();
  const [filteredCharacters, setFilteredCharacters] = useState<Character[]>([]);

  useEffect(() => {
    fetchCharacters();
  }, []);

  useEffect(() => {
    if (showFavorites) {
      const favorites = favoriteList;
      const filteredFavs = characters.filter((character) =>
        favorites.includes(character.id)
      );
      setFilteredCharacters(filteredFavs);
    } else {
      setFilteredCharacters(characters);
    }
  }, [showFavorites, characters, favoriteList]);

  if (error) {
    return <div>Error fetching characters</div>;
  }

  return (
    <Container>
      <article className="home__wrapper">
        {showFavorites && <p className="home__title">Favorites</p>}
        <SearchCharacters characters={filteredCharacters} />
      </article>
    </Container>
  );
};

export default Home;

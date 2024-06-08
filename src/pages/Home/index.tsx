import { useEffect } from "react";
import { useCharacters } from "@/context/CharacterContext";
import CharacterItemList from "@/components/molecules/CharacterItemList";

const Home: React.FC = () => {
  const { characters, fetchCharacters, loading, error } = useCharacters();

  useEffect(() => {
    fetchCharacters();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching characters</div>;
  }

  return (
    <article>
      {characters && <CharacterItemList characters={characters} />}
    </article>
  );
};

export default Home;

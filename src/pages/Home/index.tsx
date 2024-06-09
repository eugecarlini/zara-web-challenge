import { useEffect } from "react";
import { useCharacters } from "@/context/CharacterContext";
import CharacterItemList from "@/components/molecules/CharacterItemList";
import Container from "@/components/atoms/Container";

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
    <Container>
      <article>
        {characters && <CharacterItemList characters={characters} />}
      </article>
    </Container>
  );
};

export default Home;

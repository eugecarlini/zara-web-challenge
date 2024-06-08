import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useCharacters } from "@/context/CharacterContext";

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
      {characters && (
        <ul>
          {characters.map(({ id, imageSrc, name, url }) => (
            <li key={id}>
              <Link to={url} key={id}>
                <img src={imageSrc} alt={name} width="150" height="150" />
                <h2>{name}</h2>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </article>
  );
};

export default Home;

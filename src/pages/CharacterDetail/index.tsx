import React, { useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";
import { useCharacters } from "@/context/CharacterContext";

const CharacterDetail: React.FC = () => {
  const { id } = useParams<{ id: string | undefined }>();
  const { characters, comics, fetchComicsByCharacter, loading, error } =
    useCharacters();

  const characterId = useMemo(() => Number(id), [id]);

  useEffect(() => {
    if (!isNaN(characterId)) {
      fetchComicsByCharacter(id!);
    }
  }, [characterId, fetchComicsByCharacter, id]);

  useEffect(() => {
    // If context api state is not undefined
    if (characterId && characters.length !== 0) {
      fetchComicsByCharacter(characterId.toString());
    }
  }, [id, fetchComicsByCharacter]);

  const characterById = useMemo(
    () => characters.find((character) => character.id === Number(id)),
    [characters, characterId]
  );

  if (!characterId) {
    return <div>Character not found</div>;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching character detail</div>;
  }

  const characterComics = comics[characterId];

  return (
    <article>
      {characters.length ? (
        <>
          <h1>{characterById?.name}</h1>
          <p>{characterById?.description}</p>
          <img
            src={characterById?.imageSrc}
            alt={characterById?.name}
            width="150"
            height="150"
          />
        </>
      ) : (
        <p>Character not found</p>
      )}

      {characterComics && (
        <ul>
          {characterComics.map(({ id, name, imageSrc, year }) => (
            <li key={id}>
              <p>{name}</p>
              <img src={imageSrc} alt={name} width="100" height="100" />
              <p>Year: {year}</p>
            </li>
          ))}
        </ul>
      )}
    </article>
  );
};

export default CharacterDetail;

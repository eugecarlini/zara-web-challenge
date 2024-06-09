import React, { useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";
import { useCharacters } from "@/context/CharacterContext";
import { useFavoriteList } from "@/context/FavoritesContext";

const CharacterDetail: React.FC = () => {
  const { toggleFavorites } = useFavoriteList();
  const { id } = useParams<{ id: string | undefined }>();
  const {
    characters,
    characterById,
    comics,
    fetchCharacters,
    fetchCharacterById,
    fetchComicsByCharacter,
    loading,
    error,
  } = useCharacters();

  const characterId = useMemo(() => Number(id), [id]);

  useEffect(() => {
    if (!isNaN(characterId)) {
      fetchComicsByCharacter(id!);
    }
  }, [characterId, fetchComicsByCharacter, id]);

  useEffect(() => {
    if (characterId && characters.length !== 0) {
      fetchComicsByCharacter(characterId.toString());
    }
  }, [id, fetchComicsByCharacter]);

  useEffect(() => {
    // If context api state is not undefined
    if (characterId && !characters.length) {
      fetchCharacterById(id!);
    }
  }, [id, fetchCharacters]);

  const contextCharacterById = useMemo(
    () => characters.find((character) => character.id === Number(id)),
    [characters, characterId]
  );

  const selectedCharacter = contextCharacterById || characterById.at(0);

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
      <>
        <h1>{selectedCharacter?.name}</h1>
        <p>{selectedCharacter?.description}</p>
        <img
          src={selectedCharacter?.imageSrc}
          alt={selectedCharacter?.name}
          width="150"
          height="150"
        />
      </>

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

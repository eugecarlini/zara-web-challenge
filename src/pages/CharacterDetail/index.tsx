import React, { useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";
import { useCharacters } from "@/context/CharacterContext";
import Container from "@/components/atoms/Container";
import ComicsCarousel from "@/components/molecules/ComicsCarousel";
import Hero from "@/components/molecules/Hero";
import "./styles.css";

const CharacterDetail: React.FC = () => {
  const { id } = useParams<{ id: string | undefined }>();
  const {
    characters,
    characterById,
    comics,
    fetchCharacters,
    fetchCharacterById,
    fetchComicsByCharacter,
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

  if (error) {
    return <div>Error fetching character detail</div>;
  }

  const characterComics = comics[characterId];

  return (
    <main className="character-detail">
      {selectedCharacter && <Hero {...selectedCharacter} />}

      <section className="character-comics">
        <Container>
          <div className="character-comics__wrapper">
            <h2 className="character-comics__subtitle">Comics</h2>
            {characterComics && characterComics.length ? (
              <ComicsCarousel comics={characterComics} />
            ) : (
              <p>No comics found for this character</p>
            )}
          </div>
        </Container>
      </section>
    </main>
  );
};

export default CharacterDetail;

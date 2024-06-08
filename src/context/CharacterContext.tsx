import React, {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useState,
} from "react";
import {
  getComicsByCharacterId,
  getCharacters,
} from "@/services/characterService";
import { transformCharacters } from "@/utils/transformCharacters";
import { transformComics } from "@/utils/transformComics";
import { FormattedCharacter, FormattedComic } from "@/types/formattedTypes";
import { CharacterDto } from "@/types/characterDto";
import { ComicDto } from "@/types/comicDto";

interface CharacterContextProps {
  characters: FormattedCharacter[];
  fetchCharacters: () => void;
  comics: { [key: string]: FormattedComic[] };
  fetchComicsByCharacter: (id: string) => void;
  loading: boolean;
  error: any;
}

interface CharacterProviderProps {
  children: ReactNode;
}

const CharacterContext = createContext<CharacterContextProps | undefined>(
  undefined
);

const CharacterProvider: React.FC<CharacterProviderProps> = ({ children }) => {
  const [characters, setCharacters] = useState<FormattedCharacter[]>([]);
  const [comics, setComics] = useState<{
    [key: string]: FormattedComic[];
  }>({});
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);

  const fetchCharacters = useCallback(async () => {
    if (characters.length === 0) {
      setLoading(true);

      try {
        const charactersData: CharacterDto[] = await getCharacters();
        const transformedCharacters = transformCharacters(charactersData);

        setCharacters(transformedCharacters);
      } catch (error) {
        console.error("Error fetching characters:", error);
        setError(error);
      } finally {
        setLoading(false);
      }
    }
  }, []);

  const fetchComicsByCharacter = useCallback(async (id: string) => {
    if (!id) {
      console.error("id is required");
      return;
    }

    if (isNaN(Number(id))) {
      console.error("Invalid character ID");
      setError("Invalid character ID");
      return;
    }

    if (!comics[id]) {
      setLoading(true);

      try {
        const comicsData: ComicDto[] = await getComicsByCharacterId(id);
        const transformedComics = transformComics(comicsData);

        setComics((prevState) => ({
          ...prevState,
          [id]: transformedComics,
        }));
      } catch (error) {
        console.error("Error fetching comics:", error);
        setError(error);
      } finally {
        setLoading(false);
      }
    }
  }, []);

  return (
    <CharacterContext.Provider
      value={{
        characters,
        fetchCharacters,
        comics,
        fetchComicsByCharacter,
        loading,
        error,
      }}
    >
      {children}
    </CharacterContext.Provider>
  );
};

const useCharacters = () => {
  const context = useContext(CharacterContext);

  if (!context) {
    throw new Error("useCharacters debe usarse dentro de un CharacterProvider");
  }

  return context;
};

export { CharacterProvider, useCharacters };

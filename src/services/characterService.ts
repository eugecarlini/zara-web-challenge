import axios from "axios";
import { CHARACTERS_ROUTE, COMICS_ROUTE } from "@/utils/constants";
import { generateUrl } from "@/utils/generateUrl";
import { CharacterDto } from "@/types/characterDto";
import { ComicDto } from "@/types/comicDto";

export async function getCharacters(): Promise<CharacterDto[]> {
  const url = generateUrl(CHARACTERS_ROUTE);

  try {
    const { data } = await axios.get(url);
    return data?.data?.results;
  } catch (error: any) {
    throw error;
  }
}

export async function getCharacterById(id: string): Promise<CharacterDto[]> {
  const url = generateUrl(CHARACTERS_ROUTE, `/${id}`);

  try {
    const { data } = await axios.get(url);
    return data?.data?.results;
  } catch (error: any) {
    throw error;
  }
}

export async function getComicsByCharacterId(
  characterId: string
): Promise<ComicDto[]> {
  const url = generateUrl(
    CHARACTERS_ROUTE,
    `/${characterId}${COMICS_ROUTE}`,
    "&orderBy=onsaleDate",
    20
  );

  try {
    const { data } = await axios.get(url);
    return data?.data?.results;
  } catch (error: any) {
    throw error;
  }
}

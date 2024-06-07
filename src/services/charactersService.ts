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

export async function getCharactersById(id: string): Promise<CharacterDto[]> {
  const queryStrings = "&limit=20";
  const url = generateUrl(CHARACTERS_ROUTE, `/${id}`, queryStrings);

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
  const url = generateUrl(CHARACTERS_ROUTE, `/${characterId}${COMICS_ROUTE}`);

  try {
    const { data } = await axios.get(url);
    return data?.data?.results;
  } catch (error: any) {
    throw error;
  }
}

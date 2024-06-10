import { CharacterDto } from "@/types/characterDto";
import { Character } from "@/types/character";
import { CHARACTER_DETAIL_URL } from "@/utils/constants";

export const transformCharacters = (character: CharacterDto[]): Character[] => {
  return character?.map(
    ({ id, name, description, thumbnail }: CharacterDto) => ({
      id: id,
      name: name,
      description: description,
      imageSrc: `${thumbnail.path}.${thumbnail.extension}`,
      url: `${CHARACTER_DETAIL_URL}/${id}`,
    })
  );
};

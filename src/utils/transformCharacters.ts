import { CharacterDto } from "@/types/characterDto";
import { FormattedCharacter } from "@/types/formattedTypes";
import { CHARACTER_DETAIL_URL } from "@/utils/constants";

export const transformCharacters = (
  character: CharacterDto[]
): FormattedCharacter[] => {
  return character?.map(
    ({ id, name, description, thumbnail }: CharacterDto) => ({
      id: id,
      name: name,
      description: description,
      imageSrc: `${thumbnail.path}.${thumbnail.extension}`,
      isFavorite: false,
      url: `${CHARACTER_DETAIL_URL}/${id}`,
    })
  );
};

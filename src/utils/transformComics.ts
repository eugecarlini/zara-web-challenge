import { ComicDto } from "@/types/comicDto";
import { FormattedComic } from "@/types/formattedTypes";

export const transformComics = (comics: ComicDto[]): FormattedComic[] => {
  return comics?.map(({ id, title, thumbnail, dates }: ComicDto) => ({
    id,
    name: title,
    imageSrc: `${thumbnail.path}.${thumbnail.extension}`,
    year: new Date(dates[0].date).getFullYear().toString(),
  }));
};

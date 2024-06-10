import { ComicDto } from "@/types/comicDto";
import { Comic } from "@/types/comic";

export const transformComics = (comics: ComicDto[]): Comic[] => {
  if (!comics) {
    return [];
  }

  return comics?.map(({ id, title, thumbnail, dates }: ComicDto) => ({
    id,
    name: title,
    imageSrc: `${thumbnail.path}.${thumbnail.extension}`,
    year: new Date(dates[0].date).getFullYear().toString(),
  }));
};

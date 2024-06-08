export interface FormattedCharacter {
  id: number;
  name: string;
  description: string;
  imageSrc: string;
  isFavorite: boolean;
  url: string;
}

export interface FormattedComic {
  id: number;
  name: string;
  imageSrc: string;
  year: string;
}

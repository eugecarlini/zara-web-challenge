export interface CharacterDto {
  id: number;
  name: string;
  description: string;
  modified: string;
  thumbnail: Thumbnail;
  resourceURI: string;
  comics: Comics;
  series: Series;
  stories: Stories;
  events: Events;
  urls: Url[];
}

interface Thumbnail {
  path: string;
  extension: string;
}

interface Comics {
  available: number;
  collectionURI: string;
  items: Comic[];
  returned: number;
}

interface Comic {
  resourceURI: string;
  name: string;
}

interface Series {
  available: number;
  collectionURI: string;
  items: Serie[];
  returned: number;
}

interface Serie {
  resourceURI: string;
  name: string;
}

interface Stories {
  available: number;
  collectionURI: string;
  items: Story[];
  returned: number;
}

interface Story {
  resourceURI: string;
  name: string;
  type: string;
}

interface Events {
  available: number;
  collectionURI: string;
  items: Event[];
  returned: number;
}

interface Event {
  resourceURI: string;
  name: string;
}

interface Url {
  type: string;
  url: string;
}

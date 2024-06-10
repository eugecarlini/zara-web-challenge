import { describe, test, expect } from "vitest";
import { transformCharacters } from "./transformCharacters";
import { CharacterDto } from "@/types/characterDto";

describe("transformCharacters function", () => {
  test("should transform character DTOs to character objects", () => {
    const characterDtoList: CharacterDto[] = [
      {
        id: 1,
        name: "Character 1",
        description: "Description 1",
        modified: "2022-06-09T15:42:38-0400",
        resourceURI: "http://example.com/character/1",
        thumbnail: {
          path: "path1",
          extension: "jpg",
        },
        comics: {
          available: 10,
          collectionURI: "",
          items: [],
          returned: 0,
        },
        series: {
          available: 5,
          collectionURI: "",
          items: [],
          returned: 0,
        },
        stories: {
          available: 20,
          collectionURI: "",
          items: [],
          returned: 0,
        },
        events: {
          available: 5,
          collectionURI: "",
          items: [],
          returned: 0,
        },
        urls: [{ type: "detail", url: "http://example.com/character/1" }],
      },
      {
        id: 2,
        name: "Character 2",
        description: "Description 2",
        modified: "2022-06-09T15:42:38-0400",
        resourceURI: "http://example.com/character/2",
        thumbnail: {
          path: "path2",
          extension: "jpg",
        },
        comics: {
          available: 5,
          collectionURI: "",
          items: [],
          returned: 0,
        },
        series: {
          available: 3,
          collectionURI: "",
          items: [],
          returned: 0,
        },
        stories: {
          available: 10,
          collectionURI: "",
          items: [],
          returned: 0,
        },
        events: {
          available: 2,
          collectionURI: "",
          items: [],
          returned: 0,
        },
        urls: [{ type: "detail", url: "http://example.com/character/2" }],
      },
    ];

    const expectedCharacterList = [
      {
        id: 1,
        name: "Character 1",
        description: "Description 1",
        imageSrc: "path1.jpg",
        url: "/character-detail/1",
      },
      {
        id: 2,
        name: "Character 2",
        description: "Description 2",
        imageSrc: "path2.jpg",
        url: "/character-detail/2",
      },
    ];

    const transformedCharacters = transformCharacters(characterDtoList);
    expect(transformedCharacters).toEqual(expectedCharacterList);
  });

  test("should return an empty array if character DTO list is empty", () => {
    const characterDtoList: CharacterDto[] = [];
    const transformedCharacters = transformCharacters(characterDtoList);
    expect(transformedCharacters).toEqual([]);
  });

  test("should return an empty array if character DTO list is null", () => {
    const characterDtoList: CharacterDto[] = null as any;
    const transformedCharacters = transformCharacters(characterDtoList);
    expect(transformedCharacters).toEqual([]);
  });

  test("should return an empty array if character DTO list is undefined", () => {
    const characterDtoList: CharacterDto[] = undefined as any;
    const transformedCharacters = transformCharacters(characterDtoList);
    expect(transformedCharacters).toEqual([]);
  });
});

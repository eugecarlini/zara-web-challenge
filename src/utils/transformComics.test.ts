import { describe, test, expect } from "vitest";
import { transformComics } from "./transformComics";
import { ComicDto } from "@/types/comicDto";

describe("transformComics function", () => {
  test("should transform comic DTOs to comic objects", () => {
    const comicDtoList: ComicDto[] = [
      {
        id: 1,
        title: "Comic 1",
        thumbnail: {
          path: "path1",
          extension: "jpg",
        },
        dates: [{ type: "onsaleDate", date: "2022-06-09T15:42:38-0400" }],
        digitalId: 0,
        issueNumber: 0,
        variantDescription: "",
        description: "",
        modified: "",
        isbn: "",
        upc: "",
        diamondCode: "",
        ean: "",
        issn: "",
        format: "",
        pageCount: 0,
        textObjects: [],
        resourceURI: "",
        urls: [],
        variants: [],
        collections: [],
        collectedIssues: [],
        prices: [],
        images: [],
        series: {
          resourceURI: "",
          name: "",
        },
        creators: {
          available: 0,
          collectionURI: "",
          items: [
            {
              resourceURI: "",
              name: "",
              role: "",
            },
          ],
          returned: 0,
        },
        characters: {
          available: 0,
          collectionURI: "",
          items: [
            {
              resourceURI: "",
              name: "",
            },
          ],
          returned: 0,
        },
        stories: {
          available: 0,
          collectionURI: "",
          items: [
            {
              resourceURI: "",
              name: "",
              type: "",
            },
          ],
          returned: 0,
        },
        events: {
          available: 0,
          collectionURI: "",
          items: [
            {
              resourceURI: "",
              name: "",
            },
          ],
          returned: 0,
        },
      },
      {
        id: 2,
        title: "Comic 2",
        thumbnail: {
          path: "path2",
          extension: "jpg",
        },
        dates: [{ type: "onsaleDate", date: "2022-06-09T15:42:38-0400" }],
        digitalId: 0,
        issueNumber: 0,
        variantDescription: "",
        description: "",
        modified: "",
        isbn: "",
        upc: "",
        diamondCode: "",
        ean: "",
        issn: "",
        format: "",
        pageCount: 0,
        textObjects: [],
        resourceURI: "",
        urls: [],
        variants: [],
        collections: [],
        collectedIssues: [],
        prices: [],
        images: [],
        series: {
          resourceURI: "",
          name: "",
        },
        creators: {
          available: 0,
          collectionURI: "",
          items: [
            {
              resourceURI: "",
              name: "",
              role: "",
            },
          ],
          returned: 0,
        },
        characters: {
          available: 0,
          collectionURI: "",
          items: [
            {
              resourceURI: "",
              name: "",
            },
          ],
          returned: 0,
        },
        stories: {
          available: 0,
          collectionURI: "",
          items: [
            {
              resourceURI: "",
              name: "",
              type: "",
            },
          ],
          returned: 0,
        },
        events: {
          available: 0,
          collectionURI: "",
          items: [
            {
              resourceURI: "",
              name: "",
            },
          ],
          returned: 0,
        },
      },
    ];

    const expectedComicList = [
      {
        id: 1,
        name: "Comic 1",
        imageSrc: "path1.jpg",
        year: "2022",
      },
      {
        id: 2,
        name: "Comic 2",
        imageSrc: "path2.jpg",
        year: "2022",
      },
    ];

    const transformedComics = transformComics(comicDtoList);
    expect(transformedComics).toEqual(expectedComicList);
  });

  test("should return an empty array if comic DTO list is empty", () => {
    const comicDtoList: ComicDto[] = [];
    const transformedComics = transformComics(comicDtoList);
    expect(transformedComics).toEqual([]);
  });

  test("should return an empty array if comic DTO list is null", () => {
    const comicDtoList: ComicDto[] = null as any;
    const transformedComics = transformComics(comicDtoList);
    expect(transformedComics).toEqual([]);
  });

  test("should return an empty array if comic DTO list is undefined", () => {
    const comicDtoList: ComicDto[] = undefined as any;
    const transformedComics = transformComics(comicDtoList);
    expect(transformedComics).toEqual([]);
  });
});

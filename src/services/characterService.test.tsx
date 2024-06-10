import axios from "axios";
import { describe, test, expect, vi } from "vitest";
import {
  getCharacters,
  getCharacterById,
  getComicsByCharacterId,
} from "./characterService";

describe("API Functions", () => {
  vi.spyOn(axios, "get").mockImplementation(() => {
    return Promise.resolve({
      data: {
        data: {
          results: [
            { id: "1", name: "Character 1" },
            { id: "2", name: "Character 2" },
          ],
        },
      },
    });
  });

  test("getCharacters should return an array of characters", async () => {
    const characters = await getCharacters();
    expect(characters).toHaveLength(2);
    expect(characters[0].id).toEqual("1");
    expect(characters[1].name).toEqual("Character 2");
  });

  test("getCharacterById should return an array with one character", async () => {
    vi.spyOn(axios, "get").mockImplementation(() => {
      return Promise.resolve({
        data: {
          data: {
            results: [{ id: "1", name: "Character 1" }],
          },
        },
      });
    });

    const characterId = "1";
    const character = await getCharacterById(characterId);
    expect(character).toHaveLength(1);
    expect(character[0].id).toEqual(characterId);
  });

  test("getComicsByCharacterId should return an array of comics", async () => {
    vi.spyOn(axios, "get").mockImplementation(() => {
      return Promise.resolve({
        data: {
          data: {
            results: [
              { id: "1", title: "Comic 1" },
              { id: "2", title: "Comic 2" },
            ],
          },
        },
      });
    });

    const characterId = "1";
    const comics = await getComicsByCharacterId(characterId);
    expect(comics).toHaveLength(2);
    expect(comics[0].title).toEqual("Comic 1");
    expect(comics[1].id).toEqual("2");
  });

  test("getCharacters should throw an error if axios.get fails", async () => {
    vi.spyOn(axios, "get").mockImplementation(() => {
      return Promise.reject(new Error("Failed to fetch characters"));
    });

    await expect(getCharacters()).rejects.toThrow("Failed to fetch characters");
  });

  test("getCharacterById should throw an error if axios.get fails", async () => {
    vi.spyOn(axios, "get").mockImplementation(() => {
      return Promise.reject(new Error("Failed to fetch character by id"));
    });

    const characterId = "1";
    await expect(getCharacterById(characterId)).rejects.toThrow(
      "Failed to fetch character by id"
    );
  });

  test("getComicsByCharacterId should throw an error if axios.get fails", async () => {
    vi.spyOn(axios, "get").mockImplementation(() => {
      return Promise.reject(
        new Error("Failed to fetch comics by character id")
      );
    });

    const characterId = "1";
    await expect(getComicsByCharacterId(characterId)).rejects.toThrow(
      "Failed to fetch comics by character id"
    );
  });
});

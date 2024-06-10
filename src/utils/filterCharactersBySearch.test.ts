import filterCharactersBySearch from "./filterCharactersBySearch";
import { describe, test, expect } from "vitest";
import { Character } from "@/types/character";

describe("filterCharactersBySearch", () => {
  const characters: Character[] = [
    {
      id: 1,
      name: "Iron Man",
      description: "Genius, billionaire, playboy, philanthropist",
    },
    {
      id: 2,
      name: "Captain America",
      description: "Super soldier and leader of the Avengers",
    },
    {
      id: 3,
      name: "Thor",
      description: "Norse god of thunder and prince of Asgard",
    },
  ];

  test("should filter characters that match the search term", () => {
    const searchTerm = "Iron";
    const filteredCharacters = filterCharactersBySearch(characters, searchTerm);
    expect(filteredCharacters).toHaveLength(1);
    expect(filteredCharacters[0].name).toEqual("Iron Man");
  });

  test("should return an empty array if no characters match the search term", () => {
    const searchTerm = "Spider";
    const filteredCharacters = filterCharactersBySearch(characters, searchTerm);
    expect(filteredCharacters).toHaveLength(0);
  });

  test("should return the same characters if the search term is empty", () => {
    const searchTerm = "";
    const filteredCharacters = filterCharactersBySearch(characters, searchTerm);
    expect(filteredCharacters).toEqual(characters);
  });

  test("should return an empty array if characters list is null", () => {
    const searchTerm = "Iron";
    const filteredCharacters = filterCharactersBySearch(null, searchTerm);
    expect(filteredCharacters).toHaveLength(0);
  });

  test("should return an empty array if characters list is undefined", () => {
    const searchTerm = "Iron";
    const filteredCharacters = filterCharactersBySearch(undefined, searchTerm);
    expect(filteredCharacters).toHaveLength(0);
  });
});

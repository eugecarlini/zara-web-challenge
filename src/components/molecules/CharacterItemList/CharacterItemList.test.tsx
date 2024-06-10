import { render } from "@testing-library/react";
import { describe, test, expect, vi } from "vitest";
import { MemoryRouter } from "react-router-dom";
import CharacterItemList from "./";
import { Character } from "@/types/character";

vi.mock("@/components/molecules/CharacterItem", () => ({
  default: vi.fn(() => null),
}));

describe("CharacterItemList Component", () => {
  const mockCharacters: Character[] = [
    {
      id: 1,
      url: "/character/1",
      imageSrc: "image1.jpg",
      name: "Character 1",
      description: "Description 1",
    },
    {
      id: 2,
      url: "/character/2",
      imageSrc: "image2.jpg",
      name: "Character 2",
      description: "Description 2",
    },
  ];

  test("renders list of character items", () => {
    const { getAllByRole } = render(
      <MemoryRouter>
        <CharacterItemList characters={mockCharacters} />
      </MemoryRouter>
    );

    const items = getAllByRole("listitem");
    expect(items).toHaveLength(mockCharacters.length);
  });
});

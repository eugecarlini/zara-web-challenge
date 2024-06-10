import { render, fireEvent } from "@testing-library/react";
import { describe, test, expect, vi } from "vitest";
import { MemoryRouter } from "react-router-dom";
import useFavoriteCharacter from "@/hooks/useFavoriteCharacter";
import CharacterItem from "./";

vi.mock("@/hooks/useFavoriteCharacter");

const mockUseFavoriteCharacter = useFavoriteCharacter as jest.MockedFunction<
  typeof useFavoriteCharacter
>;

describe("CharacterItem Component", () => {
  const mockCharacter = {
    id: 1,
    url: "/character/1",
    imageSrc: "image.jpg",
    name: "Character Name",
    description: "Character Description",
  };

  beforeEach(() => {
    mockUseFavoriteCharacter.mockReturnValue({
      getFavoritesFromLocalStorage: vi.fn().mockReturnValue([]),
      isFavorited: vi.fn().mockReturnValue(false),
      toggleFavorite: vi.fn(),
    });
  });

  test("renders character item", () => {
    const { getByLabelText, getByAltText, getByText } = render(
      <MemoryRouter>
        <CharacterItem {...mockCharacter} />
      </MemoryRouter>
    );

    expect(getByLabelText("Go to detail page")).toBeInTheDocument();
    expect(getByAltText(mockCharacter.name)).toBeInTheDocument();
    expect(getByText(mockCharacter.name)).toBeInTheDocument();
  });

  test("toggles favorite state", () => {
    const { getByRole } = render(
      <MemoryRouter>
        <CharacterItem {...mockCharacter} />
      </MemoryRouter>
    );

    const button = getByRole("button");
    fireEvent.click(button);

    expect(mockUseFavoriteCharacter().toggleFavorite).toHaveBeenCalledWith(
      mockCharacter.id
    );
  });
});

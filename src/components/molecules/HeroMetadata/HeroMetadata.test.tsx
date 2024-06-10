import { render, fireEvent } from "@testing-library/react";
import { describe, test, expect, vi } from "vitest";
import useFavoriteCharacter from "@/hooks/useFavoriteCharacter";
import HeroMetadata from "./";

vi.mock("@/hooks/useFavoriteCharacter");

const mockUseFavoriteCharacter = useFavoriteCharacter as jest.MockedFunction<
  typeof useFavoriteCharacter
>;

describe("HeroMetadata Component", () => {
  const heroData = {
    id: 1,
    name: "Spider-Man",
    description: "A superhero with spider-like abilities.",
  };

  beforeEach(() => {
    mockUseFavoriteCharacter.mockReturnValue({
      getFavoritesFromLocalStorage: vi.fn().mockReturnValue([]),
      isFavorited: vi.fn().mockReturnValue(false),
      toggleFavorite: vi.fn(),
    });
  });

  test("renders hero metadata with correct name and description", () => {
    const { getByText } = render(<HeroMetadata {...heroData} />);

    const heroName = getByText(heroData.name);
    expect(heroName).toBeInTheDocument();
    const heroDescription = getByText(heroData.description);
    expect(heroDescription).toBeInTheDocument();
  });

  test("toggles favorite status when favorite button is clicked", () => {
    const { getByTestId } = render(<HeroMetadata {...heroData} />);
    const favoriteButton = getByTestId("toggle-favorite-button");
    expect(favoriteButton).toBeInTheDocument();
    fireEvent.click(favoriteButton);

    expect(mockUseFavoriteCharacter().toggleFavorite).toHaveBeenCalledWith(
      heroData.id
    );
  });
});

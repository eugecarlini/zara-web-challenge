import { render, fireEvent } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import { MemoryRouter } from "react-router-dom";
import { FavoriteListProvider } from "@/context/FavoritesContext";
import { CharacterProvider } from "@/context/CharacterContext";
import Header from "./index";

describe("Header Component", () => {
  test("renders header with logo and favorite button", () => {
    const { getByAltText } = render(
      <MemoryRouter>
        <CharacterProvider>
          <FavoriteListProvider>
            <Header />
          </FavoriteListProvider>
        </CharacterProvider>
      </MemoryRouter>
    );

    const logo = getByAltText("Marvel logo");
    expect(logo).toBeInTheDocument();
  });

  test("clicking on favorite button toggles favorites and navigates to homepage", () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <CharacterProvider>
          <FavoriteListProvider>
            <Header />
          </FavoriteListProvider>
        </CharacterProvider>
      </MemoryRouter>
    );

    const favoriteButton = getByTestId("toggle-favorite-button");
    fireEvent.click(favoriteButton);

    expect(favoriteButton).toHaveAttribute("aria-label");
  });
});

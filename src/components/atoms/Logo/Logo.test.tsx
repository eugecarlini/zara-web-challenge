import { render, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, test, expect, vi } from "vitest";
import {
  FavoritesContext,
  FavoriteListProvider,
} from "@/context/FavoritesContext";
import Logo from "./";

describe("Logo Component", () => {
  test("renders logo", () => {
    const { getByAltText } = render(
      <MemoryRouter>
        <FavoriteListProvider>
          <Logo />
        </FavoriteListProvider>
      </MemoryRouter>
    );
    const logo = getByAltText("Marvel logo");
    expect(logo).toBeInTheDocument();
  });

  test("navigates to homepage and toggles favorites", () => {
    const mockToggleFavorites = vi.fn();

    const { getByLabelText } = render(
      <MemoryRouter>
        <FavoritesContext.Provider
          value={{
            showFavorites: false,
            favoriteList: [],
            favoritesCount: 0,
            toggleFavorites: mockToggleFavorites,
            updateFavoriteList: () => {},
          }}
        >
          <Logo />
        </FavoritesContext.Provider>
      </MemoryRouter>
    );

    const link = getByLabelText("Go to homepage");
    fireEvent.click(link);
    expect(mockToggleFavorites).toHaveBeenCalledWith(false);
  });
});

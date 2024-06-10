import { render } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import { FavoriteListProvider } from "@/context/FavoritesContext";
import { MemoryRouter } from "react-router-dom";
import { CharacterProvider } from "@/context/CharacterContext";
import Hero from "./";

describe("Hero Component", () => {
  test("renders hero section with correct image, name, and description", () => {
    const heroData = {
      id: 1,
      name: "Spider-Man",
      description: "A superhero with spider-like abilities.",
      imageSrc: "spider-man.jpg",
    };

    const { getByAltText, getByText, getByTestId } = render(
      <MemoryRouter>
        <CharacterProvider>
          <FavoriteListProvider>
            <Hero {...heroData} />
          </FavoriteListProvider>
        </CharacterProvider>
      </MemoryRouter>
    );

    const heroSection = getByTestId("hero-section");
    const heroImage = getByAltText(`Image of ${heroData.name}`);
    const heroName = getByText(heroData.name);
    const heroDescription = getByText(heroData.description);

    expect(heroSection).toBeInTheDocument();
    expect(heroImage).toBeInTheDocument();
    expect(heroName).toBeInTheDocument();
    expect(heroDescription).toBeInTheDocument();
  });
});

import { render } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import ComicsCarousel from "./";
import { Comic } from "@/types/comic";

describe("ComicsCarousel Component", () => {
  const mockComics: Comic[] = [
    { id: 1, name: "Comic 1", imageSrc: "image1.jpg", year: "2021" },
    { id: 2, name: "Comic 2", imageSrc: "image2.jpg", year: "2022" },
  ];

  test("renders list of comics", () => {
    const { getAllByRole } = render(<ComicsCarousel comics={mockComics} />);
    const items = getAllByRole("listitem");
    expect(items).toHaveLength(mockComics.length);
  });

  test("renders comic details correctly", () => {
    const { getByAltText, getByText } = render(
      <ComicsCarousel comics={mockComics} />
    );

    mockComics.forEach((comic) => {
      expect(getByAltText(`Cover of ${comic.name}`)).toBeInTheDocument();
      expect(getByText(comic.name)).toBeInTheDocument();
      expect(getByText(comic.year)).toBeInTheDocument();
    });
  });
});

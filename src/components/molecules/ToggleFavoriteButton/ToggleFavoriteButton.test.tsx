import { render, fireEvent } from "@testing-library/react";
import { describe, test, expect, vi } from "vitest";
import ToggleFavoriteButton from "./";

const onClickMock = vi.fn();
const countMock = "10";

vi.mock("@/components/atoms/FavoriteIcon", () => ({
  __esModule: true,
  default: () => null,
}));

describe("ToggleFavoriteButton Component", () => {
  test("renders button without count", () => {
    const { getByTestId } = render(
      <ToggleFavoriteButton onClick={onClickMock} />
    );
    const button = getByTestId("toggle-favorite-button");
    expect(button).toBeInTheDocument();
  });

  test("renders button with count", () => {
    const { getByText } = render(
      <ToggleFavoriteButton onClick={onClickMock} count={countMock} />
    );
    const countElement = getByText(countMock);
    expect(countElement).toBeInTheDocument();
  });

  test("calls onClick when button is clicked", () => {
    const { getByTestId } = render(
      <ToggleFavoriteButton onClick={onClickMock} />
    );
    const button = getByTestId("toggle-favorite-button");
    fireEvent.click(button);
    expect(onClickMock).toHaveBeenCalled();
  });

  test("applies aria-pressed attribute based on isFavorited prop", () => {
    const { rerender } = render(
      <ToggleFavoriteButton onClick={onClickMock} isFavorited={true} />
    );
    let button = document.querySelector("button");
    expect(button).toHaveAttribute("aria-pressed", "true");

    rerender(<ToggleFavoriteButton onClick={onClickMock} />);
    button = document.querySelector("button");
    expect(button).toHaveAttribute("aria-pressed", "false");
  });

  test("renders correct aria-label when isFavorited prop changes", () => {
    const { rerender } = render(
      <ToggleFavoriteButton onClick={onClickMock} isFavorited={true} />
    );
    let button = document.querySelector("button");
    expect(button).toHaveAttribute("aria-label", "Remove from favorites");

    rerender(<ToggleFavoriteButton onClick={onClickMock} />);
    button = document.querySelector("button");
    expect(button).toHaveAttribute("aria-label", "Add to favorites");
  });
});

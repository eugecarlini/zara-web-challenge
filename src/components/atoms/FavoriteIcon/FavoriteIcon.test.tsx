import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { describe, test, expect } from "vitest";
import FavoriteIcon from "./";

describe("FavoriteIcon Component", () => {
  test("renders inactive icon", () => {
    const { getByTestId } = render(<FavoriteIcon isActive={false} />);
    const icon = getByTestId("favorite-icon");
    expect(icon).toHaveClass("favorite-icon--inactive");
  });

  test("renders active icon", () => {
    const { getByTestId } = render(<FavoriteIcon isActive={true} />);
    const icon = getByTestId("favorite-icon");
    expect(icon).toHaveClass("favorite-icon--active");
  });
});

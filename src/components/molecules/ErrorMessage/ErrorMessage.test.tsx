import { render } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import ErrorMessage from "./";

describe("ErrorMessage Component", () => {
  test("renders error message correctly", () => {
    const errorMessage = "This is an error message";
    const { getByText } = render(<ErrorMessage message={errorMessage} />);
    const errorMessageElement = getByText(errorMessage);
    expect(errorMessageElement).toBeInTheDocument();
  });

  test("renders empty error message when not provided", () => {
    const { container } = render(<ErrorMessage message={""} />);
    const errorMessageElement = container.querySelector(".error-message__text");
    expect(errorMessageElement).toBeNull();
  });
});

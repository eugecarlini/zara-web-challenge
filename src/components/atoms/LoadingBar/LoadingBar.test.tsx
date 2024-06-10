import { render } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import LoadingBar from "./";

describe("LoadingBar Component", () => {
  test("renders inactive loading bar", () => {
    const { getByRole, getByLabelText } = render(
      <LoadingBar isLoading={false} />
    );
    const loadingBar = getByRole("progressbar");
    const progressBar = getByLabelText("Loading");
    expect(loadingBar).toBeInTheDocument();
    expect(loadingBar).not.toHaveClass("loading-bar--active");
    expect(progressBar).toBeInTheDocument();
  });

  test("renders active loading bar", () => {
    const { getByRole, getByLabelText } = render(
      <LoadingBar isLoading={true} />
    );
    const loadingBar = getByRole("progressbar");
    const progressBar = getByLabelText("Loading");
    expect(loadingBar).toBeInTheDocument();
    expect(loadingBar).toHaveClass("loading-bar--active");
    expect(progressBar).toBeInTheDocument();
  });
});

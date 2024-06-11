import { render, screen } from "@testing-library/react";
import LoadingBar from "./";

describe("LoadingBar", () => {
  it("renders loading bar correctly", () => {
    render(<LoadingBar />);
    const progressBar = screen.getByTestId("progress-bar");
    expect(progressBar).toBeInTheDocument();
  });
});

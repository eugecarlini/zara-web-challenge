import { render, screen } from "@testing-library/react";
import { Triangle } from "../Triangle";

describe("Triangle", () => {
  it("renders triangle correctly", () => {
    render(<Triangle />);
    const triangle = screen.getByTestId("triangle");
    expect(triangle).toBeInTheDocument();
  });
});

import { render } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import { Tag } from "./";

describe("Tag Component", () => {
  test("renders with default text", () => {
    const { getByLabelText } = render(<Tag text={0} />);
    const tag = getByLabelText("0 results");
    expect(tag).toBeInTheDocument();
    expect(tag).toHaveTextContent("0 results");
    expect(tag).toHaveClass("tag");
  });

  test("renders with singular text", () => {
    const { getByLabelText } = render(<Tag text={1} />);
    const tag = getByLabelText("1 result");
    expect(tag).toBeInTheDocument();
    expect(tag).toHaveTextContent("1 result");
    expect(tag).toHaveClass("tag");
  });

  test("renders with plural text", () => {
    const { getByLabelText } = render(<Tag text={5} />);
    const tag = getByLabelText("5 results");
    expect(tag).toBeInTheDocument();
    expect(tag).toHaveTextContent("5 results");
    expect(tag).toHaveClass("tag");
  });

  test("renders with string text", () => {
    const { getByLabelText } = render(<Tag text="test" />);
    const tag = getByLabelText("test results");
    expect(tag).toBeInTheDocument();
    expect(tag).toHaveTextContent("test results");
    expect(tag).toHaveClass("tag");
  });
});

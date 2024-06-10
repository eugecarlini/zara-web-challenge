import { render } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import Container from "./";

describe("Container Component", () => {
  test("renders children correctly", () => {
    const { getByText } = render(
      <Container>
        <div>Child Element</div>
      </Container>
    );

    expect(getByText("Child Element")).toBeDefined();
  });
});

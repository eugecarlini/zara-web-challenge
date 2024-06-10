import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { fireEvent } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import { InputSearch } from "./";

describe("InputSearch Component", () => {
  test("renders with default placeholder", () => {
    const { getByPlaceholderText } = render(
      <InputSearch value="" onKeyDown={() => {}} />
    );
    const input = getByPlaceholderText("Search a character...");
    expect(input).toBeTruthy();
  });

  test("renders with custom placeholder", () => {
    const { getByPlaceholderText } = render(
      <InputSearch
        value=""
        placeholder="Custom placeholder"
        onKeyDown={() => {}}
      />
    );
    const input = getByPlaceholderText("Custom placeholder");
    expect(input).toBeTruthy();
  });

  test("calls onKeyDown callback", () => {
    let onKeyDownCalled = false;
    const onKeyDownMock = () => {
      onKeyDownCalled = true;
    };
    const { getByTestId } = render(
      <InputSearch value="" onKeyDown={onKeyDownMock} />
    );
    const input = getByTestId("search-input");

    fireEvent.keyDown(input, { key: "Enter", code: "Enter" });

    expect(onKeyDownCalled).toBeTruthy();
  });
});

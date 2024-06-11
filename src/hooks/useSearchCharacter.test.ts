import { renderHook, act } from "@testing-library/react-hooks";
import { describe, test, expect, vi } from "vitest";
import useSearchCharacter from "@/hooks/useSearchCharacter";
import { Character } from "@/types/character";

vi.mock("@/utils/filterCharactersBySearch", () => ({
  default: vi.fn((characters, searchTerm) =>
    characters.filter((character: Character) =>
      character.name.includes(searchTerm)
    )
  ),
}));

describe("useSearchCharacters", () => {
  const mockCharacters: Character[] = [
    { id: 1, name: "Character 1", description: "Description 1" },
    { id: 2, name: "Character 2", description: "Description 2" },
  ];

  test("should initialize with the correct default values", () => {
    const { result } = renderHook(() => useSearchCharacter(mockCharacters));
    expect(result.current.searchTerm).toBe("");
    expect(result.current.filteredList).toEqual(mockCharacters);
    expect(result.current.charactersCount).toBe(mockCharacters.length);
  });

  test("should update searchTerm on handleKeyDown Enter key press", () => {
    const { result } = renderHook(() => useSearchCharacter(mockCharacters));

    act(() => {
      const event = new KeyboardEvent("keydown", {
        key: "Enter",
        bubbles: true,
      });
      Object.defineProperty(event, "target", {
        writable: true,
        value: { value: "Character 1" },
      });
      result.current.handleKeyDown(
        event as unknown as React.KeyboardEvent<HTMLInputElement>
      );
    });

    expect(result.current.searchTerm).toBe("Character 1");
  });

  test("should update searchTerm on handleOnChange", () => {
    const { result } = renderHook(() => useSearchCharacter(mockCharacters));

    act(() => {
      const event = new Event("change", { bubbles: true });
      Object.defineProperty(event, "target", {
        writable: true,
        value: { value: "Character 2" },
      });
      result.current.handleOnChange(
        event as unknown as React.ChangeEvent<HTMLInputElement>
      );
    });

    expect(result.current.searchTerm).toBe("Character 2");
  });

  test("should filter characters based on searchTerm", () => {
    const { result } = renderHook(() => useSearchCharacter(mockCharacters));

    act(() => {
      const event = new Event("change", { bubbles: true });
      Object.defineProperty(event, "target", {
        writable: true,
        value: { value: "Character 1" },
      });
      result.current.handleOnChange(
        event as unknown as React.ChangeEvent<HTMLInputElement>
      );
    });

    expect(result.current.filteredList).toEqual([
      { id: 1, name: "Character 1", description: "Description 1" },
    ]);
    expect(result.current.charactersCount).toBe(1);
  });
});

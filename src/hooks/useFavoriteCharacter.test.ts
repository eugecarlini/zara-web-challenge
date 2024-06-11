import { renderHook, act } from "@testing-library/react-hooks";
import { describe, test, expect, vi, Mock } from "vitest";
import useFavoriteCharacter from "@/hooks/useFavoriteCharacter";
import { useFavoriteList } from "@/context/FavoritesContext";
import { getFavoritesFromLocalStorage } from "@/utils/getFavoritesFromLocalStorage";

vi.mock("@/context/FavoritesContext", () => ({
  useFavoriteList: vi.fn(),
}));

vi.mock("@/utils/getFavoritesFromLocalStorage", () => ({
  getFavoritesFromLocalStorage: vi.fn(),
}));

describe("useFavoriteCharacter", () => {
  const mockUpdateFavoriteList = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
    (useFavoriteList as Mock).mockReturnValue({
      updateFavoriteList: mockUpdateFavoriteList,
    });
    (getFavoritesFromLocalStorage as Mock).mockReturnValue([]);
  });

  test("should initialize localStorage with empty array if not present", () => {
    localStorage.clear();
    renderHook(() => useFavoriteCharacter());
    expect(localStorage.getItem("favoriteCharacters")).toBe(JSON.stringify([]));
  });

  test("should add character to favorites", () => {
    (getFavoritesFromLocalStorage as Mock).mockReturnValueOnce([]);
    const { result } = renderHook(() => useFavoriteCharacter());

    const localStorageMock = {
      getItem: vi.fn(),
      setItem: vi.fn(),
      removeItem: vi.fn(),
    };
    global.localStorage = localStorageMock as any;

    result.current.toggleFavorite(1);

    expect(localStorageMock.setItem).toHaveBeenCalledWith(
      "favoriteCharacters",
      JSON.stringify([1])
    );
    expect(mockUpdateFavoriteList).toHaveBeenCalled();
  });

  test("should remove character from favorites", () => {
    (getFavoritesFromLocalStorage as Mock).mockReturnValueOnce([1]);
    const { result } = renderHook(() => useFavoriteCharacter());

    act(() => {
      result.current.toggleFavorite(1);
    });

    expect(localStorage.setItem).toHaveBeenCalledWith(
      "favoriteCharacters",
      JSON.stringify([])
    );
    expect(mockUpdateFavoriteList).toHaveBeenCalled();
  });

  test("should check if character is favorited", () => {
    (getFavoritesFromLocalStorage as Mock).mockReturnValueOnce([1]);
    const { result } = renderHook(() => useFavoriteCharacter());

    expect(result.current.isFavorited(1)).toBe(true);
    expect(result.current.isFavorited(2)).toBe(false);
  });

  test("should return false if characterId is null", () => {
    const { result } = renderHook(() => useFavoriteCharacter());
    expect(result.current.isFavorited(null)).toBe(false);
  });
});

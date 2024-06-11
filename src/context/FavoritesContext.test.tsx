import { describe, test, expect, vi } from "vitest";
import { renderHook, act } from "@testing-library/react-hooks";
import { useContext } from "react";
import {
  FavoritesContext,
  FavoriteListProvider,
  useFavoriteList,
} from "@/context/FavoritesContext";

vi.mock("@/utils/getFavoritesFromLocalStorage", () => ({
  getFavoritesFromLocalStorage: () => [1, 2, 3],
}));

describe("FavoriteListProvider", () => {
  test("should initialize with default values", () => {
    const { result } = renderHook(() => useContext(FavoritesContext), {
      wrapper: FavoriteListProvider,
    });

    expect(result.current?.favoriteList).toEqual([1, 2, 3]);
    expect(result.current?.showFavorites).toBe(false);
    expect(result.current?.favoritesCount).toBe(3);
  });

  test("should update favorite list when updateFavoriteList is called", () => {
    const { result } = renderHook(() => useContext(FavoritesContext), {
      wrapper: FavoriteListProvider,
    });

    act(() => {
      result.current?.updateFavoriteList([4, 5, 6]);
    });

    expect(result.current?.favoriteList).toEqual([4, 5, 6]);
    expect(result.current?.favoritesCount).toBe(3); // El contador de favoritos no cambia ya que solo se actualiza la lista
  });

  test("should toggle showFavorites when toggleFavorites is called", () => {
    const { result } = renderHook(() => useContext(FavoritesContext), {
      wrapper: FavoriteListProvider,
    });

    act(() => {
      result.current?.toggleFavorites(true);
    });

    expect(result.current?.showFavorites).toBe(true);

    act(() => {
      result.current?.toggleFavorites(false);
    });

    expect(result.current?.showFavorites).toBe(false);
  });
});

describe("useFavoriteList", () => {
  test("should throw an error if used outside of FavoriteListProvider", () => {
    const { result } = renderHook(() => useFavoriteList());
    expect(result.error).toEqual(
      new Error("useFavoriteList must be used within a FavoritesProvider")
    );
  });
});

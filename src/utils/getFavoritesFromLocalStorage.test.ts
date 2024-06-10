import { describe, test, expect, vi } from "vitest";
import { getFavoritesFromLocalStorage } from "./getFavoritesFromLocalStorage";

describe("getFavoritesFromLocalStorage function", () => {
  test("should return an empty array if localStorage is empty", () => {
    const favorites = getFavoritesFromLocalStorage();
    expect(favorites).toEqual([]);
  });

  test("should return an array of numbers from localStorage", () => {
    const localStorageMock = {
      getItem: vi.fn().mockReturnValue(JSON.stringify([1, 2, 3])),
    };
    global.localStorage = localStorageMock as any;

    const favorites = getFavoritesFromLocalStorage();
    expect(favorites).toEqual([1, 2, 3]);
  });

  test("should return an empty array if localStorage contains invalid data", () => {
    const localStorageMock = {
      getItem: vi.fn().mockReturnValue(JSON.stringify([])),
    };
    global.localStorage = localStorageMock as any;

    const favorites = getFavoritesFromLocalStorage();
    expect(favorites).toEqual([]);
  });
});

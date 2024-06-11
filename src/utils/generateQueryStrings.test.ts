import { describe, test, expect, vi } from "vitest";
import {
  generateHash,
  generateQueryString,
} from "@/utils/generateQueryStrings";
import { API_PUBLIC_KEY } from "@/utils/constants";

describe("generateQueryStrings function", () => {
  vi.mock("md5", () => ({
    default: vi.fn().mockReturnValue("mock-md5-hash"),
  }));

  test("generateHash should generate the correct hash", () => {
    const hash = generateHash();
    expect(hash).toBe("mock-md5-hash");
  });

  test("generateQueryString should generate the correct query string", () => {
    const timestamp = "1";
    const apikey = import.meta.env.VITE_API_PUBLIC_KEY || API_PUBLIC_KEY;
    const queryString = generateQueryString();
    expect(queryString).toBe(
      `?ts=${timestamp}&hash=mock-md5-hash&apikey=${apikey}`
    );
  });
});

import { describe, test, expect } from "vitest";
import { generateUrl } from "./generateUrl";
import { API_BASE_URL } from "@/utils/constants";
import { generateQueryString } from "@/utils/generateQueryStrings";

describe("generateUrl function", () => {
  test("should generate the correct URL without additional params and limit", () => {
    const route = "/characters";
    const expectedUrl = `${API_BASE_URL}${route}${generateQueryString()}&limit=50`;
    const url = generateUrl(route);
    expect(url).toEqual(expectedUrl);
  });

  test("should generate the correct URL with path, additional params, and limit", () => {
    const route = "/characters";
    const path = "/123";
    const additionalParams = "&param1=value1&param2=value2";
    const limit = 10;
    const expectedUrl = `${API_BASE_URL}${route}${path}${generateQueryString()}${additionalParams}&limit=${limit}`;
    const url = generateUrl(route, path, additionalParams, limit);
    expect(url).toEqual(expectedUrl);
  });
});

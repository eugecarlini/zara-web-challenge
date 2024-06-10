import * as constants from "./constants";

describe("Constants", () => {
  test("API_PUBLIC_KEY should be a string", () => {
    expect(constants.API_PUBLIC_KEY).toEqual(expect.any(String));
  });

  test("API_BASE_URL should be a string", () => {
    expect(constants.API_BASE_URL).toEqual(expect.any(String));
  });

  test("CHARACTERS_ROUTE should be a string", () => {
    expect(constants.CHARACTERS_ROUTE).toEqual(expect.any(String));
  });

  test("COMICS_ROUTE should be a string", () => {
    expect(constants.COMICS_ROUTE).toEqual(expect.any(String));
  });

  test("CHARACTER_DETAIL_URL should be a string", () => {
    expect(constants.CHARACTER_DETAIL_URL).toEqual(expect.any(String));
  });

  test("GENERIC_MESSAGE should be a string", () => {
    expect(constants.GENERIC_MESSAGE).toEqual(expect.any(String));
  });

  test("CHARACTER_NOT_FOUND_MESSAGE should be a string", () => {
    expect(constants.CHARACTER_NOT_FOUND_MESSAGE).toEqual(expect.any(String));
  });
});

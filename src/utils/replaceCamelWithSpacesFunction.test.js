import replaceCamelWithSpaces from "./replaceCamelWithSpacesFunction";

describe("spaces before camel-case capital letters", () => {
  test("Works for no inner capital letters", () => {
    expect(replaceCamelWithSpaces("red")).toBe("red");
  });
  test("Works for one inner capital letter", () => {
    expect(replaceCamelWithSpaces("midnightBlue")).toBe("midnight Blue");
  });
  test("Works for multiple inner capital letters", () => {
    expect(replaceCamelWithSpaces("midiumVioletRed")).toBe("midium Violet Red");
  });
});

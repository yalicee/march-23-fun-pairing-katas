const alternateCase = require("../katas/alternate-case");

describe("alternateCase", () => {
  it("should return HeLlO when passed a single word of hello", () => {
    expect(alternateCase("hello")).toBe("HeLlO");
  });
});

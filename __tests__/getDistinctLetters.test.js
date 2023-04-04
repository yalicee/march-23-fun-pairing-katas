const getDistinctLetters = require("../katas/get-distinct-letters");

describe("getDistinctLetters", () => {
  it("should return dehrw when passed hello world", () => {
    expect(getDistinctLetters("hello", "world")).toBe("dehrw");
  });
});

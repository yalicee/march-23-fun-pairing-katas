const range = require("../katas/range");

describe("range", () => {
  it("should return an empty array when passed 0", () => {
    expect(range(0)).toEqual([]);
  });
  it("should return an array of 0 to 5 when passed 5", () => {
    expect(range(5)).toEqual([0, 1, 2, 3, 4]);
  });
  it("should return an array of 2 to 6 when passed 5, 2", () => {
    expect(range(5, 2)).toEqual([2, 3, 4, 5, 6]);
  });
  it("should return an array of 2 to 10 when passed 5, 2, 2", () => {
    expect(range(5, 2, 2)).toEqual([2, 4, 6, 8, 10]);
  });
});

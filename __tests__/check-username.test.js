const checkUsernames = require("../katas/check-usernames");

describe("checkUsernames", () => {
  it("should return true when passed an array with one username that passes all the conditions", () => {
    expect(checkUsernames(["123_alice"])).toBe(true);
  });
  it("should return true when passed an array with multiple usernames that passes all the conditions", () => {
    expect(checkUsernames(["123_alice", "eden2000", "trainlol"])).toBe(true);
  });
  it("should return false when passed an array with multiple usernames that does not pass all the conditions", () => {
    expect(
      checkUsernames(["123_alice", "eden2000", "trainlol", "!nottrue!"])
    ).toBe(false);
  });
});

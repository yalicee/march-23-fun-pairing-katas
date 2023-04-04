const checkStudents = require("../katas/check-students");

describe("checkStudents", () => {
  it("should return false if passed an empty erray", () => {
    expect(checkStudents([])).toBe(false);
  });
  it("should return true when passed students with the same cohort", () => {
    expect(
      checkStudents(
        [
          { name: "Ben", cohort: "April" },
          { name: "Amanda", cohort: "April" },
          { name: "Matt", cohort: "April" },
        ],
        "April"
      )
    ).toBe(true);
  });
  it("should return false when passed students not with the same cohort", () => {
    expect(
      checkStudents(
        [
          { name: "Ben", cohort: "October" },
          { name: "Amanda", cohort: "April" },
          { name: "Matt", cohort: "April" },
        ],
        "April"
      )
    ).toBe(false);
  });
});

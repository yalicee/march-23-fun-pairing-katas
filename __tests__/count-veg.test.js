const countVeg = require("../katas/count-veg");

describe("countVeg", () => {
  it("should return back 0 when not passed two args", () => {
    expect(countVeg()).toBe(0);
  });
  it("should return back the correct value when passed, root and an array with 1 object with a value of 4 for the quantity key", () => {
    expect(
      countVeg([{ name: "Parsnip", type: "root", quantity: 4 }], "root")
    ).toBe(4);
  });
  it("should return the correct value when passed an array of objects", () => {
    expect(
      countVeg(
        [
          { name: "Parsnip", type: "root", quantity: 4 },
          { name: "Broccoli", type: "brassica", quantity: 1 },
          { name: "Carrot", type: "root", quantity: 5 },
          { name: "Onion", type: "bulb", quantity: 3 },
          { name: "Chard", type: "leaf", quantity: 3 },
          { name: "Runner beans", type: "legume", quantity: 8 },
        ],
        "root"
      )
    ).toBe(9);
  });
});

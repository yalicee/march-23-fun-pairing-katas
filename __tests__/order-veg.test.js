const orderVeg = require("../katas/order-veg");

describe("orderVeg", () => {
  it("should return back an empty array when passed an empty array", () => {
    expect(orderVeg([])).toEqual([]);
  });
  it("should return back a new array", () => {
    const input = [];
    expect(orderVeg(input)).not.toBe(input);
  });
  it("should return back a sorted array of two objects", () => {
    const input = [
      { name: "Parsnip", type: "root", quantity: 4 },
      { name: "Broccoli", type: "brassica", quantity: 1 },
    ];
    expect(orderVeg(input)).toEqual([
      { name: "Broccoli", type: "brassica", quantity: 1 },
      { name: "Parsnip", type: "root", quantity: 4 },
    ]);
  });
  it("should return back a sorted array of multiple objects", () => {
    const input = [
      { name: "Parsnip", type: "root", quantity: 4 },
      { name: "Broccoli", type: "brassica", quantity: 1 },
      { name: "Carrot", type: "root", quantity: 5 },
      { name: "Onion", type: "bulb", quantity: 3 },
      { name: "Chard", type: "leaf", quantity: 3 },
      { name: "Runner beans", type: "legume", quantity: 8 },
    ];
    expect(orderVeg(input)).toEqual([
      { name: "Broccoli", type: "brassica", quantity: 1 },
      { name: "Onion", type: "bulb", quantity: 3 },
      { name: "Chard", type: "leaf", quantity: 3 },
      { name: "Parsnip", type: "root", quantity: 4 },
      { name: "Carrot", type: "root", quantity: 5 },
      { name: "Runner beans", type: "legume", quantity: 8 },
    ]);
  });
});

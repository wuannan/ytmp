import { expect } from "chai";
import reduce from "../src/reduce.js";

describe("reduce", () => {
  it("Adds up all the numbers in an array", () => {
    const result = reduce([1, 2, 3], (sum, n) => sum + n, 0);
    expect(result).to.equal(6);
  });

  it("Starts with the first num. if there's no given starting value", () => {
    const result = reduce([1, 2, 3], (sum, n) => sum + n);
    expect(result).to.equal(6);
  });

  it("Groups object values into arrays based on the value", () => {
    const result = reduce(
      { a: 1, b: 2, c: 1 },
      (acc, value, key) => {
        (acc[value] || (acc[value] = [])).push(key);
        return acc;
      },
      {}
    );
    expect(result).to.deep.equal({ 1: ["a", "c"], 2: ["b"] });
  });

  it("Handles empty arrays and objects by giving back the starting value", () => {
    expect(reduce([], (sum, n) => sum + n, 0)).to.equal(0);
    expect(reduce({}, (sum, n) => sum + n, 0)).to.equal(0);
  });

  it("Gives undefined for empty arrays / objects if there's no given starting value", () => {
    expect(reduce([], (sum, n) => sum + n)).to.be.undefined;
    expect(reduce({}, (sum, n) => sum + n)).to.be.undefined;
  });
});

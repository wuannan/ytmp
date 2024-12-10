import { expect } from "chai";
import difference from "../src/difference.js";

describe("difference", () => {
  it("Finds stuff in the 1st array that isn't in the 2nd one", () => {
    const result = difference([2, 1], [2, 3]);
    expect(result).to.deep.equal([1]);
  });

  it("Works when removing values from multiple arrays", () => {
    const result = difference([2, 1, 3], [2], [3]);
    expect(result).to.deep.equal([1]);
  });

  it("Returns an empty arrayu if the 1st array has nothing in it", () => {
    const result = difference([], [1, 2, 3]);
    expect(result).to.deep.equal([]);
  });

  it("Keeps everything if any values are not excluded", () => {
    const result = difference([1, 2, 3]);
    expect(result).to.deep.equal([1, 2, 3]);
  });

  it("Returns an empty array if all the values are removed", () => {
    const result = difference([1, 2, 3], [1, 2, 3]);
    expect(result).to.deep.equal([]);
  });

  it("Handles non-array inputs by treating them like empty arrays", () => {
    const result = difference(null, [1, 2, 3]);
    expect(result).to.deep.equal([]);
  });

  it("Ignores empty arrays in the exclude list", () => {
    const result = difference([1, 2, 3], []);
    expect(result).to.deep.equal([1, 2, 3]);
  });
});

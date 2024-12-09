import { expect } from "chai";
import chunk from "../src/chunk.js";

describe("chunk", () => {
  it("should split an array into chunks of the specified size", () => {
    const array = ["a", "b", "c", "d"];
    const result = chunk(array, 2);
    expect(result).to.deep.equal([
      ["a", "b"],
      ["c", "d"],
    ]);
  });

  it("should handle arrays that cannot be split evenly", () => {
    const array = ["a", "b", "c", "d"];
    const result = chunk(array, 3);
    expect(result).to.deep.equal([["a", "b", "c"], ["d"]]);
  });

  it("should return an empty array when given an empty array", () => {
    const array = [];
    const result = chunk(array, 2);
    expect(result).to.deep.equal([]);
  });

  it("should return an array of single-element chunks if size is 1", () => {
    const array = ["a", "b", "c", "d"];
    const result = chunk(array, 1);
    expect(result).to.deep.equal([["a"], ["b"], ["c"], ["d"]]);
  });

  it("should return the entire array as one chunk if size is greater than or equal to array length", () => {
    const array = ["a", "b", "c"];
    const result = chunk(array, 5);
    expect(result).to.deep.equal([["a", "b", "c"]]);
  });

  it("should return an empty array if size is 0", () => {
    const array = ["a", "b", "c", "d"];
    const result = chunk(array, 0);
    expect(result).to.deep.equal([]);
  });

  it("should return an empty array if size is negative", () => {
    const array = ["a", "b", "c", "d"];
    const result = chunk(array, -2);
    expect(result).to.deep.equal([]);
  });

  it("should handle non-integer sizes by converting to an integer", () => {
    const array = ["a", "b", "c", "d"];
    const result = chunk(array, 2.5);
    expect(result).to.deep.equal([
      ["a", "b"],
      ["c", "d"],
    ]);
  });

  it("should return an empty array when the input array is null or undefined", () => {
    expect(chunk(null, 2)).to.deep.equal([]);
    expect(chunk(undefined, 2)).to.deep.equal([]);
  });
});

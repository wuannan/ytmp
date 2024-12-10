import { expect } from "chai";
import chunk from "../src/chunk.js";

describe("chunk", () => {
  it("Breakdown an array into smaller groups based on the specified size", () => {
    const array = ["a", "b", "c", "d"];
    const result = chunk(array, 2);
    expect(result).to.deep.equal([
      ["a", "b"],
      ["c", "d"],
    ]);
  });

  it("Breakdown an arrays even when the size doesn't divide evenly", () => {
    const array = ["a", "b", "c", "d"];
    const result = chunk(array, 3);
    expect(result).to.deep.equal([["a", "b", "c"], ["d"]]);
  });

  it("Returns back an empty array if the input array is empty", () => {
    const array = [];
    const result = chunk(array, 2);
    expect(result).to.deep.equal([]);
  });

  it("Makes every element into individual chunks when the size is 1", () => {
    const array = ["a", "b", "c", "d"];
    const result = chunk(array, 1);
    expect(result).to.deep.equal([["a"], ["b"], ["c"], ["d"]]);
  });

  it("Keeps the whole array as a group if the size is the exact same or bigger than the array length", () => {
    const array = ["a", "b", "c"];
    const result = chunk(array, 5);
    expect(result).to.deep.equal([["a", "b", "c"]]);
  });

  it("Returns an empty array if the size is 0", () => {
    const array = ["a", "b", "c", "d"];
    const result = chunk(array, 0);
    expect(result).to.deep.equal([]);
  });

  it("Returns an empty array if the size is a neg no.", () => {
    const array = ["a", "b", "c", "d"];
    const result = chunk(array, -2);
    expect(result).to.deep.equal([]);
  });

  it("Handles decimals or non-int. sizes by by converting to the nearest whole no.", () => {
    const array = ["a", "b", "c", "d"];
    const result = chunk(array, 2.5);
    expect(result).to.deep.equal([
      ["a", "b"],
      ["c", "d"],
    ]);
  });

  it("Returns an empty array if the input is 'null' or 'undefined'", () => {
    expect(chunk(null, 2)).to.deep.equal([]);
    expect(chunk(undefined, 2)).to.deep.equal([]);
  });
});

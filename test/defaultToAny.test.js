import { expect } from "chai";
import defaultToAny from "../src/defaultToAny.js";

describe("defaultToAny", () => {
  it("should return the first non-null/undefined/NaN value", () => {
    expect(defaultToAny(1, 10, 20)).to.equal(1);
    expect(defaultToAny(false, 10, 20)).to.equal(false);
    expect(defaultToAny("", 10, 20)).to.equal("");
    expect(defaultToAny(undefined, null, 20)).to.equal(20);
  });

  it("should return NaN if all other values are null, undefined, or NaN", () => {
    expect(defaultToAny(undefined, null, NaN)).to.be.NaN;
  });

  it("should return undefined if no defaults are provided", () => {
    expect(defaultToAny()).to.equal(undefined);
  });
});

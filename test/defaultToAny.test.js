import { expect } from "chai";
import defaultToAny from "../src/defaultToAny.js";

describe("defaultToAny", () => {
  it("Picks the 1st value that isn't null / undefined / NaN", () => {
    expect(defaultToAny(1, 10, 20)).to.equal(1);
    expect(defaultToAny(false, 10, 20)).to.equal(false);
    expect(defaultToAny("", 10, 20)).to.equal("");
    expect(defaultToAny(undefined, null, 20)).to.equal(20);
  });

  it("Gives back NaN if all the values are null / undefined / NaN", () => {
    expect(defaultToAny(undefined, null, NaN)).to.be.NaN;
  });

  it("Returns undefined if nothing is passed in", () => {
    expect(defaultToAny()).to.equal(undefined);
  });
});

import { expect } from "chai";
import ceil from "../src/ceil.js";

describe("ceil", () => {
  it("Rounds up to the nearest int if precision isn't given", () => {
    expect(ceil(4.006)).to.equal(5);
    expect(ceil(-4.006)).to.equal(-4);
    expect(ceil(0)).to.equal(0);
  });

  it("Rounds up to the specified precision", () => {
    expect(ceil(6.004, 2)).to.equal(6.01);
    expect(ceil(1.2345, 3)).to.equal(1.235);
    expect(ceil(-1.2345, 2)).to.equal(-1.23);
  });

  it("Rounds up to the nearest multiple of 10 when precision is neg", () => {
    expect(ceil(6040, -2)).to.equal(6100);
    expect(ceil(49, -1)).to.equal(50);
    expect(ceil(-49, -1)).to.equal(-40);
  });

  it("Handles edge cases where precision is 0", () => {
    expect(ceil(10.5, 0)).to.equal(11);
    expect(ceil(-10.5, 0)).to.equal(-10);
  });

  it("Handles big nums smoothly", () => {
    expect(ceil(123456.789, -3)).to.equal(124000);
  });

  it("Gives 'Nan' for bad inputs", () => {
    expect(ceil(NaN)).to.be.NaN;
    expect(ceil("string")).to.be.NaN;
    expect(ceil(undefined)).to.be.NaN;
  });

  it("Default value is 0 if no precision is given", () => {
    expect(ceil(4.123)).to.equal(5);
    expect(ceil(6.789)).to.equal(7);
  });
});

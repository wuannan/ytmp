import { expect } from "chai";
import add from "../src/add.js";


describe("add", () => {
  it("Adds 2 positive no. and returns the sum", () => {
    expect(add(3, 7)).to.equal(10);
  });

  it("Adds 2 negative no. and returns the difference", () => {
    expect(add(-3, -7)).to.equal(-10);
  });

  it("Works with a mix of positive and negative no. including edge cases", () => {
    expect(add(3, -7)).to.equal(-4);
  });

  it("Returns the same number when adding 0", () => {
    expect(add(7, 0)).to.equal(7);
    expect(add(0, 7)).to.equal(7);
  });

  it("Returns 0 when both inputs are 0", () => {
    expect(add(0, 0)).to.equal(0);
  });

  it("Handles non-no. inputs by converting them to no. when possible", () => {
    expect(add("6", 4)).to.equal(10);
    expect(add(6, "4")).to.equal(10);
  });

  it("Assume the default value is 0 when there are missing/no arguments", () => {
    expect(add(5)).to.equal(5);
    expect(add()).to.equal(0);
  });
});

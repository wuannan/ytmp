import { expect } from "chai";
import add from "../src/add.js";

describe("add", () => {
  it("should correctly add two positive numbers", () => {
    expect(add(3, 7)).to.equal(10);
  });

  it("should correctly add two negative numbers", () => {
    expect(add(-3, -7)).to.equal(-10);
  });

  it("should correctly add a positive and a negative number", () => {
    expect(add(3, -7)).to.equal(-4);
  });

  it("should return the same number when adding zero", () => {
    expect(add(7, 0)).to.equal(7);
    expect(add(0, 7)).to.equal(7);
  });

  it("should return 0 when both numbers are zero", () => {
    expect(add(0, 0)).to.equal(0);
  });

  it("should handle non-numeric inputs gracefully", () => {
    expect(add("6", 4)).to.equal(10);
    expect(add(6, "4")).to.equal(10);
  });

  it("should handle missing arguments by treating them as 0", () => {
    expect(add(5)).to.equal(5);
    expect(add()).to.equal(0);
  });
});

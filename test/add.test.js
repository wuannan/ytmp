import { expect } from "chai";
import add from "../src/add.js";

describe("add", () => {
  it("should add two positive numbers correctly", () => {
    expect(add(6, 4)).to.equal(10);
  });

  it("should add two negative numbers correctly", () => {
    expect(add(-3, -7)).to.equal(-10);
  });

  it("should add a positive and a negative number correctly", () => {
    expect(add(5, -2)).to.equal(3);
  });

  it("should return the number itself when adding zero", () => {
    expect(add(7, 0)).to.equal(7);
    expect(add(0, 7)).to.equal(7);
  });

  it("should return 0 when adding two zeros", () => {
    expect(add(0, 0)).to.equal(0);
  });

  it("should handle decimal numbers correctly", () => {
    expect(add(1.5, 2.5)).to.equal(4);
    expect(add(-1.1, -2.2)).to.be.closeTo(-3.3, 0.001);
  });

  it("should handle large numbers correctly", () => {
    expect(add(1e6, 1e6)).to.equal(2e6);
  });

  it("should handle no inputs correctly (return 0)", () => {
    expect(add()).to.equal(0);
  });
});

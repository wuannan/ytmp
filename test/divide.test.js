import { expect } from "chai";
import divide from "../src/divide.js";

describe("divide", () => {
  it("Divides 2 pos. nums", () => {
    expect(divide(6, 3)).to.equal(2);
    expect(divide(9, 3)).to.equal(3);
  });

  it("Divides a pos. no. by a neg. no.", () => {
    expect(divide(6, -2)).to.equal(-3);
  });

  it("Divides 2 negative nums", () => {
    expect(divide(-6, -2)).to.equal(3);
  });

  it("Returns 0 when dividing 0 by any nums.", () => {
    expect(divide(0, 5)).to.equal(0);
  });

  it("Handles decimal nums", () => {
    expect(divide(1.5, 0.5)).to.equal(3);
    expect(divide(-1.5, 0.5)).to.equal(-3);
  });

  it("Returns 'NaN' when dividing by 0", () => {
    expect(divide(5, 0)).to.be.NaN;
    expect(divide(-5, 0)).to.be.NaN;
  });

  it("Gives 'NaN' for invalid inputs like strings / null / undefined", () => {
    expect(divide("6", 3)).to.be.NaN;
    expect(divide(6, "3")).to.be.NaN;
    expect(divide(null, 3)).to.be.NaN;
    expect(divide(6, undefined)).to.be.NaN;
  });

  it("Uses default values if arguments are missing", () => {
    expect(divide(6)).to.equal(6);
    expect(divide()).to.equal(1);
  });
});

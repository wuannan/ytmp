import { expect } from "chai";
import toNumber from "../src/toNumber.js";

describe("toNumber", () => {
  it("Returns the same number back for a numeric input", () => {
    expect(toNumber(3.2)).to.equal(3.2);
    expect(toNumber(-42)).to.equal(-42);
    expect(toNumber(0)).to.equal(0);
  });

  it("Parses numeric strings into numbers", () => {
    expect(toNumber("3.2")).to.equal(3.2);
    expect(toNumber("42")).to.equal(42);
    expect(toNumber("-42")).to.equal(-42);
  });

  it("Trims spaces around a string before turning it into a num", () => {
    expect(toNumber("  3.2  ")).to.equal(3.2);
  });

  it("Converts binary strings into nums.", () => {
    expect(toNumber("0b101")).to.equal(5);
    expect(toNumber("0b1111")).to.equal(15);
  });

  it("Converts octal strings into nums.", () => {
    expect(toNumber("0o10")).to.equal(8);
    expect(toNumber("0o7")).to.equal(7);
  });

  it("Converts HEX strings into nums.", () => {
    expect(toNumber("0x2A")).to.equal(42);
    expect(toNumber("0xFF")).to.equal(255);
  });

  it("Returns NaN for strings that aren't nums.", () => {
    expect(toNumber("hello")).to.be.NaN;
  });

  it("Gives NaN for symbols", () => {
    expect(toNumber(Symbol("symbol"))).to.be.NaN;
  });

  it("Converts objects with a numberic 'valueOf' to numbers", () => {
    const obj = { valueOf: () => 42 };
    expect(toNumber(obj)).to.equal(42);
  });

  it("Returns NaN for objects that don't have a numberic 'valueOf'", () => {
    const obj = { valueOf: () => "hello" };
    expect(toNumber(obj)).to.be.NaN;
  });

  it("Handles Infinity and -Infinity properly", () => {
    expect(toNumber(Infinity)).to.equal(Infinity);
    expect(toNumber(-Infinity)).to.equal(-Infinity);
  });

  it("Returns NaN for undefined / null", () => {
    expect(toNumber(undefined)).to.be.NaN;
  });

  it("Returns 0 for null", () => {
    expect(toNumber(null)).to.equal(0);
  });
});

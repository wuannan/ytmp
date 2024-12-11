import { expect } from "chai";
import isEmpty from "../src/isEmpty.js";

describe("isEmpty", () => {
  it("Returns true for null / undefined values", () => {
    expect(isEmpty(null)).to.equal(true);
    expect(isEmpty(undefined)).to.equal(true);
  });

  it("Returns true for empty arrays", () => {
    expect(isEmpty([])).to.equal(true);
  });

  it("Returns false for arrays with stuff in them", () => {
    expect(isEmpty([1, 2, 3])).to.equal(false);
  });

  it("Returns true for empty strings", () => {
    expect(isEmpty("")).to.equal(true);
  });

  it("Returns false for strings with stuff in them", () => {
    expect(isEmpty("abc")).to.equal(false);
  });

  it("Returns true for empty objects", () => {
    expect(isEmpty({})).to.equal(true);
  });

  it("Returns false for objects with key values in them", () => {
    expect(isEmpty({ a: 1 })).to.equal(false);
  });

  it("Returns true for empty Maps and Sets", () => {
    expect(isEmpty(new Map())).to.equal(true);
    expect(isEmpty(new Set())).to.equal(true);
  });

  it("Returns false for Maps and Sets with stuff in them", () => {
    const map = new Map();
    map.set("key", "value");
    expect(isEmpty(map)).to.equal(false);

    const set = new Set();
    set.add(1);
    expect(isEmpty(set)).to.equal(false);
  });

  it("Returns true for an empty buffer", () => {
    const buffer = Buffer.alloc(0);
    expect(isEmpty(buffer)).to.equal(true);
  });

  it("Returns false for a buffer with data in it", () => {
    const buffer = Buffer.from([1, 2, 3]);
    expect(isEmpty(buffer)).to.equal(false);
  });

  it("Returns true for things like numbers / booleans / symbols", () => {
    expect(isEmpty(0)).to.equal(true);
    expect(isEmpty(1)).to.equal(true);
    expect(isEmpty(true)).to.equal(true);
    expect(isEmpty(false)).to.equal(true);
    expect(isEmpty(Symbol("symbol"))).to.equal(true);
  });

  it("Returns true for a prototype object without properties", () => {
    const obj = {};
    expect(isEmpty(Object.getPrototypeOf(obj))).to.equal(true);
  });

  it("Returns false for a prototype object with properties", () => {
    const proto = {};
    proto.key = "value";
    const obj = Object.create(proto);
    expect(isEmpty(Object.getPrototypeOf(obj))).to.equal(false);
  });
});

import { expect } from "chai";
import at from "../src/at.js";

describe("at", () => {
  it("Returns values from the object at the specified paths", () => {
    const object = { a: [{ b: { c: 3 } }, 4] };
    const result = at(object, ["a[0].b.c", "a[1]"]);
    expect(result).to.deep.equal([3, 4]);
  });

  it("Returns 'undefined' for paths that don't exist in the object", () => {
    const object = { a: [{ b: { c: 3 } }] };
    const result = at(object, ["a[0].d", "a[1]"]);
    expect(result).to.deep.equal([undefined, undefined]);
  });

  it("Returns values for exisitng paths and 'undefined' for paths that don't exist", () => {
    const object = { a: { b: { c: 3 } } };
    const result = at(object, ["a.b.c", "a.d"]);
    expect(result).to.deep.equal([3, undefined]);
  });

  it("Returns an empty array when the paths array is empty", () => {
    const object = { a: 1 };
    const result = at(object, []);
    expect(result).to.deep.equal([]);
  });

  it("Returns an empty array when no paths are provided", () => {
    const object = { a: 1 };
    const result = at(object);
    expect(result).to.deep.equal([]);
  });
});

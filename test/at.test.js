import { expect } from "chai";
import at from "../src/at.js";

describe("at", () => {
  it("should return values at specified paths in the object", () => {
    const object = { a: [{ b: { c: 3 } }, 4] };
    const result = at(object, ["a[0].b.c", "a[1]"]);
    expect(result).to.deep.equal([3, 4]);
  });

  it("should return undefined for non-existent paths", () => {
    const object = { a: [{ b: { c: 3 } }] };
    const result = at(object, ["a[0].d", "a[1]"]);
    expect(result).to.deep.equal([undefined, undefined]);
  });

  it("should handle mixed existing and non-existent paths", () => {
    const object = { a: { b: { c: 3 } } };
    const result = at(object, ["a.b.c", "a.d"]);
    expect(result).to.deep.equal([3, undefined]);
  });

  it("should handle empty paths", () => {
    const object = { a: 1 };
    const result = at(object, []);
    expect(result).to.deep.equal([]);
  });

  it("should handle no paths provided", () => {
    const object = { a: 1 };
    const result = at(object);
    expect(result).to.deep.equal([]);
  });
});

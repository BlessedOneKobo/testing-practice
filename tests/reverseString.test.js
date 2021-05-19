import { reverseString } from "../main";

test("takes a string and returns it reversed", () => {
  expect(reverseString("  mello jello  ")).toBe("  ollej ollem  ");
});

test("takes an empty string and returns it", () => {
  expect(reverseString("")).toBe("");
});

test("takes nothing and throws an exception", () => {
  expect(() => reverseString()).toThrow();
});

test("takes a non-string and throws an exception", () => {
  expect(() => reverseString(null)).toThrow();
  expect(() => reverseString(3)).toThrow();
  expect(() => reverseString(false)).toThrow();
  expect(() => reverseString([])).toThrow();
  expect(() => reverseString({})).toThrow();
});

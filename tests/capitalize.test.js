import { capitalize } from "../main";

test("takes a string and returns the string with the first letter capitalized", () => {
  expect(capitalize("africa")).toBe("Africa");
});

test("takes nothing and throws an exception", () => {
  expect(() => capitalize()).toThrow();
});

test("takes non-string argument and throws an exception", () => {
  expect(() => capitalize(null)).toThrow();
  expect(() => capitalize(undefined)).toThrow();
  expect(() => capitalize(2)).toThrow();
  expect(() => capitalize([])).toThrow();
  expect(() => capitalize({})).toThrow();
  expect(() => capitalize(false)).toThrow();
});

test("takes empty string and returns empty string", () => {
  expect(capitalize("")).toBe("");
});

test("takes a capitalized string and returns the same string", () => {
  expect(capitalize("Hello")).toBe("Hello");
});

test("takes untrimmed string and returns the same string", () => {
  expect(capitalize("    hello    ")).toBe("    hello    ");
});

test("takes a string with an number as first character and returns the same string", () => {
  expect(capitalize("1hello")).toBe("1hello");
});

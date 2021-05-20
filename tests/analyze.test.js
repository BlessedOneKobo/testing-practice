import { analyze } from "../main";

test("throws an error when given nothing", () => {
  expect(() => analyze()).toThrow();
});

test("throws an error when given a non-array", () => {
  expect(() => analyze(1)).toThrow();
  expect(() => analyze(null)).toThrow();
  expect(() => analyze(false)).toThrow();
  expect(() => analyze("")).toThrow();
  expect(() => analyze({})).toThrow();
  expect(() => analyze({ 0: 1, 2: 8 })).toThrow();
});

test("throws an error with an empty array", () => {
  expect(() => analyze([])).toThrow();
});

test("throws an error with a non-numerical array element", () => {
  expect(() => analyze([1, 8, 6, null, 5, 9])).toThrow();
});

test("returns an object with analysis when given an array", () => {
  expect(analyze([0])).toEqual({
    average: 0,
    min: 0,
    max: 0,
    length: 1,
  });
  expect(analyze([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});

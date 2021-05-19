import { calculator } from "../main";

test("add two postive numbers", () => {
  expect(calculator.add(2, 3)).toBe(5);
  expect(calculator.add(3, 2)).toBe(5);
});

test("add one positive number and one negative number", () => {
  expect(calculator.add(3, -2)).toBe(1);
  expect(calculator.add(-2, 3)).toBe(1);
});

test("add two negative numbers", () => {
  expect(calculator.add(-8, -32)).toBe(-40);
  expect(calculator.add(-32, -8)).toBe(-40);
});

test("add one number and zero", () => {
  expect(calculator.add(8, 0)).toBe(8);
  expect(calculator.add(0, 8)).toBe(8);
  expect(calculator.add(-12, 0)).toBe(-12);
  expect(calculator.add(0, -12)).toBe(-12);
});

test("subtract two postive numbers", () => {
  expect(calculator.subtract(2, 3)).toBe(-1);
  expect(calculator.subtract(3, 2)).toBe(1);
});

test("subtract one positive number and one negative number", () => {
  expect(calculator.subtract(9, -5)).toBe(14);
  expect(calculator.subtract(-9, 5)).toBe(-14);
});

test("subtract two negative numbers", () => {
  expect(calculator.subtract(-11, -77)).toBe(66);
  expect(calculator.subtract(-60, -54)).toBe(-6);
});

test("subtract one number and zero", () => {
  expect(calculator.subtract(8, 0)).toBe(8);
  expect(calculator.subtract(0, 8)).toBe(-8);
  expect(calculator.subtract(-12, 0)).toBe(-12);
  expect(calculator.subtract(0, -12)).toBe(12);
});

test("multiply two positive numbers", () => {
  expect(calculator.multiply(2, 4)).toBe(8);
});

test("multiply two negative numbers", () => {
  expect(calculator.multiply(-9, -5)).toBe(45);
});

test("multiply one positive number and one negative number", () => {
  expect(calculator.multiply(-8, 3)).toBe(-24);
  expect(calculator.multiply(3, -8)).toBe(-24);
});

test("multiply number by zero", () => {
  expect(calculator.multiply(89, 0)).toBe(0);
  expect(calculator.multiply(0, 76)).toBe(0);
});

test("divide two positive numbers", () => {
  expect(calculator.divide(2, 4)).toBeCloseTo(0.5);
  expect(calculator.divide(9, 3)).toBeCloseTo(3);
  expect(calculator.divide(7, 2)).toBeCloseTo(3.5);
});

test("divide two negative numbers", () => {
  expect(calculator.divide(-2, -4)).toBeCloseTo(0.5);
  expect(calculator.divide(-9, -3)).toBeCloseTo(3);
  expect(calculator.divide(-7, -2)).toBeCloseTo(3.5);
});

test("divide one positive number and one negative number", () => {
  expect(calculator.divide(-8, 3)).toBeCloseTo(-2.666);
  expect(calculator.divide(2, -8)).toBeCloseTo(-0.25);
});

test("divide number by zero", () => {
  expect(() => calculator.divide(89, 0)).toThrow();
  expect(calculator.divide(0, 76)).toBe(0);
});

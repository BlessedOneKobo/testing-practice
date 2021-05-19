function typeErrorTag(strings, value) {
  const [typeName] = strings;
  return `Invalid argument "${value}": ${typeName} required`;
}

// Takes a string and returns that string with the first character capitalized
export function capitalize(str) {
  if (typeof str !== "string") {
    throw new Error(typeErrorTag`string${str}`);
  }

  const [firstCharacter = ""] = str;
  return `${firstCharacter.toUpperCase()}${str.slice(1)}`;
}

// Takes a string and returns it reversed
export function reverseString(str) {
  if (typeof str !== "string") {
    throw new Error(typeErrorTag`string${str}`);
  }

  return str.split("").reverse().join("");
}

// An object with basic arithmetic methods
export const calculator = {
  add(x, y) {
    return x + y;
  },
  subtract(x, y) {
    return x - y;
  },
  multiply(x, y) {
    return x * y;
  },
  divide(x, y) {
    if (y === 0) {
      throw new Error("Cannot divide by zero");
    }

    return x / y;
  },
};

export function analyze(arr) {
  if (!Array.isArray(arr)) {
    throw new Error(typeErrorTag`array${arr}`);
  }

  if (!arr.length) {
    throw new Error("Array must have at least one item");
  }

  return {
    average: arr.reduce((sum, curr) => sum + curr, 0) / arr.length,
    min: Math.min(...arr),
    max: Math.max(...arr),
    length: arr.length,
  };
}

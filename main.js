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

// Returns statistical analysis for a numerical array
export function analyze(arr) {
  if (!Array.isArray(arr)) {
    throw new Error(typeErrorTag`array${arr}`);
  }

  if (!arr.length) {
    throw new Error("Array must have at least one item");
  }

  let sum = 0;
  const LENGTH = arr.length;

  for (let idx = 0; idx < LENGTH; idx += 1) {
    const currentElement = arr[idx];

    if (typeof currentElement !== "number" || currentElement === NaN) {
      const errMsg = `Invalid element ${currentElement} at [${idx}]: All elements must be numbers`;
      throw new Error(errMsg);
    }

    sum += currentElement;
  }

  return {
    average: sum / LENGTH,
    min: Math.min(...arr),
    max: Math.max(...arr),
    length: LENGTH,
  };
}

export function caesar(key) {
  if (typeof key !== "number" || key === NaN) {
    throw new Error(typeErrorTag`number${key}`);
  }

  function isValidEnglishCode(code) {
    return 0 <= code && code <= 25;
  }

  function isLowerCase(ch) {
    return "a" <= ch && ch <= "z";
  }

  function convertToEnglishCode(ch) {
    const firstLetter = isLowerCase(ch) ? "a" : "A";
    const englishCode = ch.charCodeAt(0) - firstLetter.charCodeAt(0);

    return {
      firstLetter,
      englishCode: isValidEnglishCode(englishCode) ? englishCode : null,
    };
  }

  function processChar({ ch, key, callback }) {
    const { firstLetter, englishCode } = convertToEnglishCode(ch);

    if (englishCode === null) {
      return ch;
    }

    let processedEnglishCode = callback({ englishCode, key });

    return String.fromCharCode(
      processedEnglishCode + firstLetter.charCodeAt(0)
    );
  }

  function processText({ text, key, callback }) {
    return text
      .split("")
      .map((ch) => processChar({ ch, key, callback }))
      .join("");
  }

  function encryptEnglishCode({ key, englishCode }) {
    return (englishCode + key) % 26;
  }

  function decryptEnglishCode({ key, englishCode }) {
    let decryptedEnglishCode = (englishCode - key) % 26;

    if (decryptedEnglishCode < 0) {
      return 26 + decryptedEnglishCode;
    }

    return decryptedEnglishCode;
  }

  return {
    encipher(text) {
      if (typeof text !== "string") {
        throw new Error(typeErrorTag`string${text}`);
      }

      return processText({ text, key, callback: encryptEnglishCode });
    },
    decipher(text) {
      if (typeof text !== "string") {
        throw new Error(typeErrorTag`string${text}`);
      }

      return processText({ text, key, callback: decryptEnglishCode });
    },
  };
}

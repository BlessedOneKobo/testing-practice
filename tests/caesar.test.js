import { caesar } from "../main";

const plaintext = "defend the east wall of the castle";
const ciphertext = "efgfoe uif fbtu xbmm pg uif dbtumf";

it("throws an exception when key is invalid or unavailable", () => {
  expect(() => caesar().encipher(plaintext)).toThrow();
  expect(() => caesar("").encipher(plaintext)).toThrow();
  expect(() => caesar(true).encipher(plaintext)).toThrow();
  expect(() => caesar(null).encipher(plaintext)).toThrow();
  expect(() => caesar([]).encipher(plaintext)).toThrow();
  expect(() => caesar({}).encipher(plaintext)).toThrow();
});

it("throws an exception when input text is invalid or unavailable", () => {
  expect(() => caesar(4).encipher()).toThrow();
  expect(() => caesar(4).encipher(true)).toThrow();
  expect(() => caesar(4).encipher(null)).toThrow();
  expect(() => caesar(4).encipher([])).toThrow();
  expect(() => caesar(4).encipher({})).toThrow();
  expect(() => caesar(4).decipher()).toThrow();
  expect(() => caesar(4).decipher(true)).toThrow();
  expect(() => caesar(4).decipher(null)).toThrow();
  expect(() => caesar(4).decipher([])).toThrow();
  expect(() => caesar(4).decipher({})).toThrow();
});

it("encrypts a plaintext string", () => {
  expect(caesar(1).encipher(plaintext)).toBe(ciphertext);
});

it("decrypts a ciphertext string", () => {
  expect(caesar(1).decipher(ciphertext)).toBe(plaintext);
});

it("works when wrapping between 'z' and 'a'", () => {
  expect(caesar(1).encipher("Z")).toBe("A");
  expect(caesar(1).decipher("A")).toBe("Z");
  expect(caesar(30).encipher("A")).toBe("E");
  expect(caesar(30).decipher("E")).toBe("A");
});

it("keeps the same case", () => {
  const plaintextCapitalized = "Defend the East wall of the castle";
  const ciphertextCapitalized = "Efgfoe uif Fbtu xbmm pg uif dbtumf";
  expect(caesar(1).encipher(plaintextCapitalized)).toBe(ciphertextCapitalized);
  expect(caesar(1).decipher(ciphertextCapitalized)).toBe(plaintextCapitalized);
});

it("keeps punctuation", () => {
  const plaintextPunctuated1 = "Defend, the East wall of the castle!!!";
  const ciphertextPunctuated1 = "Efgfoe, uif Fbtu xbmm pg uif dbtumf!!!";
  expect(caesar(1).encipher(plaintextPunctuated1)).toBe(ciphertextPunctuated1);
  expect(caesar(1).decipher(ciphertextPunctuated1)).toBe(plaintextPunctuated1);

  const plaintextPunctuated2 =
    "The Caesar cipher is one of the earliest, well-known, and simplest ciphers.";
  const ciphertextPunctuated2 =
    "Sgd Bzdrzq bhogdq hr nmd ne sgd dzqkhdrs, vdkk-jmnvm, zmc rhlokdrs bhogdqr.";
  expect(caesar(25).encipher(plaintextPunctuated2)).toBe(ciphertextPunctuated2);
  expect(caesar(25).decipher(ciphertextPunctuated2)).toBe(plaintextPunctuated2);
});

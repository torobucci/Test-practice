const { stringLength, reverseString, calc,capitalize } = require("./functions.js");

describe("stringLength function tests", () => {
  test("no input", () => {
    expect(() => stringLength("")).toThrow("You haven't inputed any character");
  });
  test("input charachters more than expected", () => {
    expect(() => stringLength("12345678910")).toThrow(
      "String should not have more than 10 charachters"
    );
  });
  test("return str length", () => {
    expect(stringLength("Christoph")).toBe(9);
  });
});
describe("reverseString function tests", () => {
  test("return reversed string length", () => {
    expect(reverseString("Christoph")).toBe("hpotsirhC");
  });
});
describe("calculator tests", () => {
  describe("add function", () => {
    test("negative two plus four", () => {
      expect(calc.add(-2, 4)).toBe(2);
    });
  });
  describe("subtract function", () => {
    test("0 minus negative 1", () => {
      expect(calc.subtract(0, -1)).toBe(1);
    });
  });
  describe("divide function", () => {
    test("0 divided by -1", () => {
      expect(calc.divide(0, -1)).toBe(-0);
    });
    test("-1 divided by 0", () => {
      expect(calc.divide(-1, 0)).toBe(-Infinity);
    });
  });
  describe("multiply function", () => {
    test("0 times negative 1", () => {
      expect(calc.multiply(0, -1)).toBe(-0);
    });
  });
});
describe('capitalize function',()=>{
  test('check if argument is a string',()=>{
    expect(()=>capitalize(3)).toThrow('argument should be a string')
  })
  test('check if funnction return a string with first letter in uppercase',()=>{
    expect(capitalize('bucci')).toBe('Bucci')
  })
})
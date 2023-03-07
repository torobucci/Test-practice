const {stringLength,reverseString} = require('./functions.js');

  test('no input', () => {
    expect(()=>stringLength('')).toThrow("You haven't inputed any character");
  });
  test('input charachters more than expected', () => {
    expect(()=>stringLength('12345678910')).toThrow("String should not have more than 10 charachters");
  });
  test('return str length', () => {
    expect(stringLength('Christoph')).toBe(9);
  });
  test('return reversed string length', () => {
    expect(reverseString('Christoph')).toBe('hpotsirhC');
  });
 
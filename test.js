const sum = require('./sum.js');

  
  test('but there is a "stop" in Christoph', () => {
    expect(sum('Christoph')).toMatch(/stop/);
  });
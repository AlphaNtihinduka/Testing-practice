const stringLength = require('./stringLength');

test('The string is empty', () => {
    expect(stringLength('')).toEqual(0);
})

test('String has characters more than one and less or equal to 10', () => {
    const string = '0<x<=10'
    expect(stringLength(string)).toBeGreaterThan(0);
    expect(stringLength(string)).toBeLessThanOrEqual(10);
});

// test('Throw error if string has less than 0', () => {
//     expect(stringLength('')).toThrow
// });

// test('Throw error if string has greater than 10', () => {
//     expect(stringLength('This string has char greater than 10')).toThrow
// });
const capitalizeString = require('./capitalizedString');

test('Capitalized', () => {
    expect(capitalizeString("hello world")).toEqual("Hello world")
})
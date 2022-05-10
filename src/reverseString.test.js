const reverseString = require('./reverseString');
const string = require('./reverseString')

test('Existing reverse function', () => {
    expect(reverseString).toBeDefined()
})

test('the string reversing', () => {
    expect(reverseString('Hello')).toEqual('olleh');
})
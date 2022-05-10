const Calculator = require('./calculator');

describe('Calculator operations', () => {

    test('Addition giving correct results', () => {
        const calculator = new Calculator();
        expect(calculator.add(3,6)).toEqual(9)
        expect(calculator.add(100, 22)).toEqual(122)
    })

    test('subtraction', () => {
        const calculator = new Calculator();
        expect(calculator.subtract(3,6)).toEqual(-3)
        expect(calculator.subtract(100, 22)).toEqual(78)
    });

    test('division', () => {
        const calculator = new Calculator();
        expect(calculator.divide(3,6)).toEqual(0.5)
        expect(calculator.divide(10, 5)).toEqual(2)
    });
})




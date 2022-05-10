class Calculator {
    constructor(x, y, result) {
        this.x = x;
        this.y = y;
        this.result = result
    }

    add(x, y) {
        this.result = x + y;
        return this.result;
    };

    subtract(x, y) {
        this.result = x - y;
        return this.result;
    };

    multiply(x, y) {
        this.result = a * y;
        return this.result;
    };

    divide(a, y) {
        if (y !==0) {
            this.result = a / y;
            return this.result;
        }
    };
}

module.exports = Calculator
'use strict';

const calculator = createCalculator(100);

calculator.add(10);
calculator.add(10);
calculator.sub(20);

calculator.set(20);
calculator.add(10);
calculator.add(10);
calculator.add('qwe');
console.log(calculator.get());

function createCalculator(initialNumber) {
    const calculator = {
        number: 0,
        add: (secondOperand) => isNaN(secondOperand) ? NaN : calculator.number += secondOperand,
        sub: (secondOperand) => isNaN(secondOperand) ? NaN : calculator.number -= secondOperand,
        get: () => calculator.number,
        set: (newNumber) => isNaN(newNumber) ? NaN : calculator.number = newNumber,
    }

    calculator.set(initialNumber);

    return calculator;
}
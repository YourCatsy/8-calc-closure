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

function createCalculator(number) {
    if (isNaN(number)) {
       number = 0;
    }

    const calculator = {
        add: (secondOperand) => isNaN(secondOperand) ? NaN : number += secondOperand,
        sub: (secondOperand) => isNaN(secondOperand) ? NaN : number -= secondOperand,
        get: () => number,
        set: (newNumber) => isNaN(newNumber) ? NaN : number = newNumber,
    }

    return calculator;
}
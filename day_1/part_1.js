const input = require('./input');
const TARGET = 2020;

function twoSumToTarget(input, target) {
    let pointer = 0;

    while (pointer < input.length) {
        let num1 = +input[pointer];

        for (let i = 0; i < input.length; i++) {
            if (pointer === i) continue;

            let num2 = +input[i];
           
            if (num1 + num2 === target) {
                return num1 * num2;
            } 
        }

        pointer++;
    }
}

console.log(twoSumToTarget(input.INPUT, TARGET));
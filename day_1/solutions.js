const requireText = require('require-text');

const inputArray = requireText('./input.txt', require).split('\n');
const target = 2020;

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

const threeSumToTarget = function(nums, target) {
	nums = nums.sort((a, b) => a - b);
	for (let i = 0; i < nums.length; i++) {
		let j = i + 1;
		let k = nums.length - 1;
		let a = +nums[i];

		while (j < k) {
			let b = +nums[j];
			let c = +nums[k];

			if (a + b + c === target) {
				return a * b * c;
			} else if (a + b + c < target) {
				j++;
			} else {
				k--;
			}
		}
	}

}

module.exports = {
	twoSumToTarget,
	threeSumToTarget,
}
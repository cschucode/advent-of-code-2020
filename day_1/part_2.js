const inputArray = require('./input');
const TARGET = 2020;

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

console.log(threeSumToTarget(inputArray, 2020)); // 128397680 

module.exports = threeSumToTarget;
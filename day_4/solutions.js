const requireText = require('require-text');

const input = requireText('./input.txt', require);

/**
 * returns number of valid passports in given array
 *
 * @param Array data array of passports to check
 * @return {number} Number of valid passports
 */
function validatePassport(data) {
	let validPassports = 0;
	const passports = data.split('\n\n');
	const required = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid'];

	for (let i = 0; i < passports.length; i++) {
		const passport = passports[i];
		let validPassport = true;
		
		for (let j = 0; j < required.length; j++) {
			const field = required[j];

			if (passport.indexOf(field) < 0) {
				validPassport = false;
			}
		}

		validPassports += validPassport ? 1 : 0;
	}

	return validPassports;
}

console.log(validatePassport(input));

module.exports = {
	validatePassport,
}
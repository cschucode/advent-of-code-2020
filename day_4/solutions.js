import requireText from 'require-text';
import { formatPassport } from './utils';
import Validate from './Validator';

const input = requireText('./input.txt', require);

/**
 * returns number of valid passports in given array
 *
 * @param Array data array of passports to check
 * @return {number} Number of valid passports
 */
export const validatePassports = (data, strictMode = false) => {
	let passportCount = 0;
	const passports = data.split(/\n{2,}/g).map((pass) => pass.replace(/\n+/g, ' '));
	const required = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid'];
	const validPassports = [];

	for (let i = 0; i < passports.length; i++) {
		const passport = formatPassport(passports[i]);
		let validPassport = true;
		
		for (let j = 0; j < required.length; j++) {
			const field = required[j];
			const entry = passport[field];

			if (!entry) {
				validPassport = false;
			} 
		}

		if (validPassport) {
			passportCount++;
			validPassports.push(passport);
		}
	}

	return strictMode ? strictlyValidatePassports(validPassports) : passportCount;
}

const strictlyValidatePassports = (passports) => {
	const validate = new Validate();
	let passportCount = 0;

	passports.forEach((passport) => {
		if (validate.isValid(passport)) {
			passportCount++;
		}
	});

	return passportCount;
}	

// console.log(validatePassports(input));
// console.log(validatePassports(input, true));
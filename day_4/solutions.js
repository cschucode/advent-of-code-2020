import requireText from 'require-text';

const input = requireText('./input.txt', require);

/**
 * returns number of valid passports in given array
 *
 * @param Array data array of passports to check
 * @return {number} Number of valid passports
 */
export const validatePassport = (data) => {
	let validPassports = 0;
	const passports = data.split(/\n{2,}/g).map((pass) => pass.replace(/\n+/g, ' '));
	const required = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid'];

	for (let i = 0; i < passports.length; i++) {
		const passport = formatPassport(passports[i]);
		let validPassport = true;
		
		for (let j = 0; j < required.length; j++) {
			const field = required[j];
			const entry = passport[field];

			if (!entry) {
				validPassport = false;
			} 


			// Part II
			// switch (field) {
			// 	case 'byr':
			// 		validPassport = validateYear(entry, 1920, 2002);
			// 		break;
			// 	case 'iyr':
			// 		validPassport = validateYear(entry, 2010, 2020);
			// 		break;
			// 	case 'eyr':
			// 		validPassport = validateYear(entry, 2020, 2030);
			// 		break;
			// 	case 'hgt':
			// 		validPassport = validateHeight(entry);
			// 		break;
			// 	case 'hcl':
			// 		validPassport = validateHairColor(entry);
			// 		break;
			// 	case 'ecl':
			// 		validPassport = validateEyeColor(entry);
			// 		break;
			// 	case 'pid':
			// 		validPassport = validatePID(entry);
			// 		break;
			// 	default:
			// 		// 
			// }
		}

		validPassports += validPassport ? 1 : 0;
	}

	return validPassports;
}

function formatPassport(str) {
	const passObj = {};
	const fields = str.split(' ');

	fields.forEach((field) => {
		let pair = field.replace('\n', '').split(':');
		passObj[pair[0]] = pair[1];
	});

	return passObj;
}

function validateYear(year, min, max) {
	if (year.length !== 4) return false;

	return +year >= min && +year <= max;
}

function validateHeight(str) {
	const bits = str.match(/\d+|\D+/g);
	let validDistance = bits[1] === 'cm' || bits[1] ==='in';

	return validDistance && bits[1] === 'cm' ? bits[0] >= 150 && bits[0] <= 193 : bits[0] >= 59 && bits[0] <= 76;
};

function validateHairColor(color) {
	/^#[0-9A-F]{6}$/i.test('#AABBCC')
};

function validateEyeColor(color) {
	const validColors = ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'];

	return validColors.indexOf(color) >= 0;
};

function validatePID (id) {
	return id.length === 9 && !isNaN(id);
};

console.log(validatePassport(input));
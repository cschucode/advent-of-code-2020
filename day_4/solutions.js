const requireText = require('require-text');

const inputArray = requireText('./input.txt', require).split('\n');

/**
 * counts trees at given coordinates in matrix
 *
 * @param Array passports array of passports to check
 * @return {number} Number of valid passports
 */
function validatePassport(passports) {
	let validPassports = 0;

	return validPassports;
}

module.exports = {
	validatePassport,
}
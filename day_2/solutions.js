import requireText from 'require-text';

const inputArray = requireText('./input.txt', require).split('\n');

/**
 * Password is valid if password contains given character within specified range
 *
 * @param Array passwords array of passwords to check
 * @return {number} Number of valid passwords
 */
export const passCheckLowHigh = (passwords) => {
	let validCount = 0;

	for (let i = 0; i < passwords.length; i++) {
		const ruleTargetPass = passwords[i].split(' ');
		const range = ruleTargetPass[0].split('-');
		const low = range[0];
		const high = range[1];
		const target = ruleTargetPass[1][0];
		const pass = ruleTargetPass[2];
		const regex = new RegExp(target, 'g');
		const match = pass.match(regex);
		const count = match ? match.length : 0;

		if (count >= low && count <= high) {
			validCount++;
		} 
	}

	return validCount;
}

/**
 * Password is valid if target occurs at either of indices but not the other
 *
 * @param Array passwords array of passwords to check
 * @return {number} Number of valid passwords
 */
export const  passCheckEitherOr = (passwords) => {
	let validCount = 0;

	for (let i = 0; i < passwords.length; i++) {
		const ruleTargetPass = passwords[i].split(' ');
		const range = ruleTargetPass[0].split('-');
		const idx1 = range[0];
		const idx2 = range[1];
		const target = ruleTargetPass[1][0];
		const pass = ruleTargetPass[2];

		if (
			pass[idx1 - 1] === target && pass[idx2 - 1] !== target ||
			pass[idx1 -1] !== target && pass[idx2 - 1] === target) {
				validCount++;
			}
	}

	return validCount;
}
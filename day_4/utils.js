import Validate from './Validator';

export const formatPassport = (dataString) => {
	const passport = {};
	const fields = dataString.split(' ');

	fields.forEach((field) => {
		let pair = field.replace('\n', '').split(':');
		passport[pair[0]] = pair[1];
	});

	return passport;
}

export const strictlyValidatePassports = (passports) => {
	const validate = new Validate();
	let passportCount = 0;

	passports.forEach((passport) => {
		if (validate.isValid(passport)) {
			passportCount++;
		}
	});

	return passportCount;
}	
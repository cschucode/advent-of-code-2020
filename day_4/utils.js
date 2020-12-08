export const formatPassport = (str) => {
	const passObj = {};
	const fields = str.split(' ');

	fields.forEach((field) => {
		let pair = field.replace('\n', '').split(':');
		passObj[pair[0]] = pair[1];
	});

	return passObj;
}
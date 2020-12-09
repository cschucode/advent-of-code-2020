import requireText from 'require-text';
import _ from 'underscore';

const input = requireText('./input.txt', require);

export const sumAllCounts = (groupList) => {
	// break list up into groups
	const groups = groupList.split(/\n{2,}/g).map((pass) => pass.replace(/\n+/g, ' '));
	let total = 0;
	
	groups.forEach((group) => {
		let voteSet = new Set();

		for (let i = 0; i < group.length; i++) {
			let vote = group[i];
			if (vote === ' ') continue;

			voteSet.add(group[i]);
		}

		total += voteSet.size;
	});

	return total;
}

export const sumAllUnifiedCounts = (groupList) => {
	const groups = groupList.split(/\n{2,}/g).map((pass) => pass.replace(/\n+/g, ' '));
	let total = 0;

	groups.forEach((group) => {
		const passengers = group.split(' ').map((passenger) => {
			return passenger.split('');
		});

		const intersection = passengers.reduce((curr, next) => {
			return _.intersection(curr, next);
		});

		// This was really close, but returned 3646 instead of 3640 with underscore

		// let intersection = passengers.reduce((curr, next) => {
		// 	let regex = new RegExp(`[${curr}]`, 'g');
		// 	let match = next.match(regex);
		// 	return match;
		// });
		
		total += intersection.length;
	});

	return total;
}


// console.log(sumAllCounts(input));
console.log(sumAllUnifiedCounts(input));
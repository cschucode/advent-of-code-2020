import requireText from 'require-text';
import _ from 'underscore';

const input = requireText('./input.txt', require);

export const luggageFinder = (bags, target) => {
	bags = typeof bags === 'string' ? bags.split('\n') : bags;
	let results = [];

	bags.forEach((bag, idx) => {
		const def = bag.split('contain');
		const type = def[0].trim().slice(0, def[0].length - 2);
		const inside = def[1].trim();

		if (inside.indexOf(target) > -1) {
			results.push(bag);
			results.push(luggageFinder(bags, type));
		}
	});
	
	return _.uniq(_.flatten(results));
}

// console.log(luggageFinder(input, 'shiny gold bag').length);

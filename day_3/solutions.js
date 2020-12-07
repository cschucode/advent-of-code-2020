const requireText = require('require-text');

const inputArray = requireText('./input.txt', require).split('\n');

/**
 * counts trees at given coordinates in matrix
 *
 * @param Array map matrix array of map coordinates
 * @param {number} h number of spaces to move right
 * @param {number} v number of spaces to move down
 * @return {number} Number of valid passwords
 */
function treeCounter(map, h, v) {
	let treeCount = 0;
	const xLimit = map[0].length;
	const yLimit = map.length;
	let x = h;
	let y = v;

	while (y < yLimit) {
		if (map[y][x] === '#') {
			treeCount++;
		}

		if (x + h >= xLimit) {
			x = (x + h) - xLimit;
		} else {
			x += h;
		}
		y += v;
	}

	return treeCount;
}

/**
 * counts trees for multiple slopes at given coordinates
 *
 * @param Array map matrix array of map coordinates
 * @param {number} h number of spaces to move right
 * @param {number} v number of spaces to move down
 * @return {number} Number of valid passwords
 */
function multipleSlopeTreeCounter(map, slopes) {
	let totalTrees = 1;

	slopes.forEach((slope) => {
		totalTrees *= treeCounter(map, slope[0], slope[1]);
	});

	return totalTrees;
}

module.exports = {
	treeCounter,
	multipleSlopeTreeCounter,
}
import { expect } from 'chai';

import { treeCounter, multipleSlopeTreeCounter } from '../day_3/solutions';

const test_input = `..##.......
#...#...#..
.#....#..#.
..#.#...#.#
.#...##..#.
..#.##.....
.#.#.#....#
.#........#
#.##...#...
#...##....#
.#..#...#.#`.split('\n');

const test_slopes = [
  [1, 1],
  [3, 1],
  [5, 1],
  [7, 1],
  [1, 2]
];

describe('Day Three', function() {
  describe('treeCounter', function() {
    it('should return number of trees for a given region', function() {
      const expected_treeCounter = 7;
      expect(treeCounter(test_input, 3, 1)).to.equal(expected_treeCounter);
    });
  });

  describe('multipleSlopeTreeCounter', function() {
    it('should return total number of trees for multiple slopes', function() {
      const expected_multipleSlopeTreeCounter = 336;
      expect(multipleSlopeTreeCounter(test_input, test_slopes)).to.equal(expected_multipleSlopeTreeCounter);
    });
  });
});
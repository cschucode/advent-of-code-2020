import { expect } from 'chai';

import { twoSumToTarget, threeSumToTarget } from '../day_1/solutions';

const test_input = [1721, 979, 366, 299, 675, 1456];
const test_target = 2020;

describe('Day One', function() {

  describe('twoSumToTarget', function() {
    it('should find two numbers that add up to target and multiply them', function() {
      const expected_twoSumToTarget = 514579;
      expect(twoSumToTarget(test_input, test_target)).to.equal(expected_twoSumToTarget);
    });
  });

  describe('threeSumToTarget', function() {
    it('should find 3 numbers that add up to 2020 and multiply them', function() {
      const expected_threeSumToTarget = 241861950;
      expect(threeSumToTarget(test_input, test_target)).to.equal(expected_threeSumToTarget);
    });
  });
});
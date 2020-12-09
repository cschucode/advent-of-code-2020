import { expect } from 'chai';

import { passCheckLowHigh, passCheckEitherOr } from '../day_2/solutions';

const test_input = ['1-3 a: abcde', '1-3 b: cdefg', '2-9 c: ccccccccc'];

describe('Day Two', function() {
  describe('passCheckLowHigh', function() {
    it('should should number of valid passwords based on rule set', function() {
      const expected_passCheckLowHigh = 2;
      expect(passCheckLowHigh(test_input)).to.equal(expected_passCheckLowHigh);
    });
  });

  describe('passCheckEitherOr', function() {
    it('should should number of valid passwords based on rule set', function() {
      const expected_passCheckEitherOr = 1;
      expect(passCheckEitherOr(test_input)).to.equal(expected_passCheckEitherOr);
    });
  });
});
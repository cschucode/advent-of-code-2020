var assert = require('assert');

const { passCheckLowHigh, passCheckEitherOr } = require('../day_2/solutions');

const test_input = ['1-3 a: abcde', '1-3 b: cdefg', '2-9 c: ccccccccc'];

describe('Day Two', function() {
  describe('passCheckLowHigh', function() {
    it('should should number of valid passwords based on rule set', function() {
      const expected_passCheckLowHigh = 2;
      assert.equal(passCheckLowHigh(test_input), expected_passCheckLowHigh);
    });
  });

  describe('passCheckEitherOr', function() {
    it('should should number of valid passwords based on rule set', function() {
      const expected_passCheckEitherOr = 1;
      assert.equal(passCheckEitherOr(test_input), expected_passCheckEitherOr);
    });
  });
});
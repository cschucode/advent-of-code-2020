var assert = require('assert');
const threeSumToTarget = require('../day_1/part_2');

describe('Day One', function() {
  describe('threeSumToTarget', function() {
    it('should find 3 numbers that add up to 2020 and multiply them', function() {

      assert.equal(threeSumToTarget([1, 2000, 19], 2020), 38000);
    });
  });
});
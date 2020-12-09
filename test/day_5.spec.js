import { findSeatID } from "../day_5/solutions";
import { expect } from 'chai';

describe('Day Five', function() {
  describe('findSeatID', function() {
    it('Should return proper code for given key', function() {
      expect(findSeatID('FBFBBFFRLR')).to.equal(357);
      expect(findSeatID('BFFFBBFRRR')).to.equal(567);
      expect(findSeatID('FFFBBBFRRR')).to.equal(119);
      expect(findSeatID('BBFFBBFRLL')).to.equal(820);
    });
  });
});
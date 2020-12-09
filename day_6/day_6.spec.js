import { sumAllCounts, sumAllUnifiedCounts } from "../day_6/solutions";
import { expect } from 'chai';

const test_input = `abc

a
b
c

ac
acd

a
a
a
a

b`;

const test_input_2 = `cmthfprlzxvg
chzgaxjkpwrl
dhybeprslocun

pdrc
rpcd
dcpr

nsi
vlsig
ins
si`; 

describe('Day Six', function() {
  describe('sumAllCounts', function() {
    it('Should return sum of all counts for given groups', function() {
      expect(sumAllCounts(test_input)).to.equal(11);
    });
  });

  describe('sumAllUnifiedCounts', function() {
    it('Should return sum of all counts where everyone voted yes for given groups', function() {
      expect(sumAllUnifiedCounts(test_input)).to.equal(7);
      expect(sumAllUnifiedCounts(test_input_2)).to.equal(11);
    });
  });
});
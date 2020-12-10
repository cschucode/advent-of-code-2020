import { luggageFinder } from "../day_7/solutions";
import { expect } from 'chai';

const test_input = `light red bags contain 1 bright white bag, 2 muted yellow bags.
dark orange bags contain 3 bright white bags, 4 muted yellow bags.
bright white bags contain 1 shiny gold bag.
muted yellow bags contain 2 shiny gold bags, 9 faded blue bags.
shiny gold bags contain 1 dark olive bag, 2 vibrant plum bags.
dark olive bags contain 3 faded blue bags, 4 dotted black bags.
vibrant plum bags contain 5 faded blue bags, 6 dotted black bags.
faded blue bags contain no other bags.
dotted black bags contain no other bags.`;

const target_input = 'shiny gold bag';

describe('Day Seven', function() {
  describe('luggageFinder', function() {
    it('should return number of bags that can contain target bag', function() {
      expect(luggageFinder(test_input, target_input).length).to.equal(4);
    });
  });
});
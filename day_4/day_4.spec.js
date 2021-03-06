import { validatePassports } from "../day_4/solutions";
import { expect } from 'chai';

const test_input = `ecl:gry pid:860033327 eyr:2020 hcl:#fffffd
byr:1937 iyr:2017 cid:147 hgt:183cm

iyr:2013 ecl:amb cid:350 eyr:2023 pid:028048884
hcl:#cfa07d byr:1929

hcl:#ae17e1 iyr:2013
eyr:2024
ecl:brn pid:760753108 byr:1931
hgt:179cm

hcl:#cfa07d eyr:2025 pid:166559648
iyr:2011 ecl:brn hgt:59in`;

describe('Day Four', function() {
  describe('validatePassport', function() {
    it('should return number of valid passports from given array', function() {
      const expected_validPassports = 2;
      expect(validatePassports(test_input)).to.equal(expected_validPassports);
    });

    it('should return number of strictly validated passports in strict mode', function() {
      const expected_validPassports = 2;
      expect(validatePassports(test_input, true)).to.equal(expected_validPassports);
    });
  });
});
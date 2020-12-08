const Validate = class {
    isValid(passport) {
        let validBirthYear = this.year(passport['byr'], 1920, 2002);
        let validIssueYear = this.year(passport['iyr'], 2010, 2020);
        let validExpirationYear = this.year(passport['eyr'], 2020, 2030);
        let validHeight = this.height(passport['hgt']);
        let validHairColor = this.hairColor(passport['hcl']);
        let validEyeColor = this.eyeColor(passport['ecl']);
        let validPID = this.personalID(passport['pid']);

        return validBirthYear && validIssueYear && validExpirationYear &&
        validHeight && validHairColor && validEyeColor && validPID;
    }

    year(year, min, max) {
        if (year.length !== 4) return false;
        return +year >= min && +year <= max;
    }

    height(height) {
        const bits = height.match(/\d+|\D+/g);
        let validDistance = bits[1] === 'cm' || bits[1] ==='in';

        return validDistance && bits[1] === 'cm' ? bits[0] >= 150 && bits[0] <= 193 : bits[0] >= 59 && bits[0] <= 76;
    }

    hairColor(color) {
        return color.match(/^#[0-9A-F]{6}$/i) !== null;
    }

    eyeColor(color) {
        const validColors = ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'];

        return validColors.indexOf(color) >= 0;
    }

    personalID(id) {
        return id.length === 9 && !isNaN(id);
    }
}

export default Validate;
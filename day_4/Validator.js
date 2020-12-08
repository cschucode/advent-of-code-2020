const Validate = class {
    isValid(passport) {
        // console.log(passport);
        let validBirthYear = this.year(passport['byr'], 1920, 2002);
        // console.log('byr::', validBirthYear)
        let validIssueYear = this.year(passport['iyr'], 2010, 2020);
        // console.log('iry::', validIssueYear);
        let validExpirationYear = this.year(passport['eyr'], 2020, 2030);
        // console.log('eyr::', validExpirationYear);
        let validHeight = this.height(passport['hgt']);
        // console.log('hgt::', validHeight);
        let validHairColor = this.hairColor(passport['hcl']);
        // console.log('hcl::', validHairColor);
        let validEyeColor = this.eyeColor(passport['ecl']);
        // console.log('ecl::', validEyeColor);
        let validPID = this.personalID(passport['pid']);
        // console.log('pid::', validPID);

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
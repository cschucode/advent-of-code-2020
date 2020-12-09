import requireText from 'require-text';

const input = requireText('./input.txt', require);

export const findSeatID = (key) => {
    const rowKey = key.slice(0, 7);
    const aisleKey = key.slice(7);

    return findSpot(rowKey, 127, 'F') * 8 + findSpot(aisleKey, 7, 'L');
}

function findSpot(key, max, direction) {
    let min = 0;

    for (let i = 0; i < key.length; i++) {
        let char = key[i];

        if (char === direction) {
            max = Math.ceil((min + max) / 2);
        } else {
            min = Math.ceil((min + max) / 2);
        }
    }

    return min;
};

function findHighestSeatId(input) {
    const arr = input.split('\n');
    let highest = 0;

    arr.forEach((id) => {
        if (findSeatID(id) > highest) {
            highest = findSeatID(id);
        }
    });

    return highest;
}

function findMissingSeatID(input) {
    let inputArr = input.split('\n');
    // I'm sure there's a faster way to search and sort this #bruteforce
    let seatIDs = inputArr.map((code) => {
        return findSeatID(code);
    }).sort((a, b) => a - b);
    let missingSeatID = null;
    // makes the third time I've had to run through this list
    for (let i = 0; i < seatIDs.length; i++) {
        if (seatIDs[i + 1] - seatIDs[i] === 2) {
            missingSeatID = seatIDs[i] + 1;
        }
    }
    return missingSeatID;
}

// console.log(findHighestSeatId(input));
// console.log(findMissingSeatID(input));
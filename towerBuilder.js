// const towerBuilder = (nFloors) => {
//     const maxLength = nFloors + nFloors - 1;
//     const tower = [];

//     for (i = 1; i <= nFloors; i++) {
//         let numOfAsterisks = i + i - 1;
//         let whiteSpacePerSide = (maxLength - numOfAsterisks) / 2
//         let str = '';
//         for (j = 0; j < whiteSpacePerSide; j++) {
//             str = str + ' ';
//         }
//         for (k = 0; k < numOfAsterisks; k++) {
//             str = str + '*'
//         }
//         for (j = 0; j < whiteSpacePerSide; j++) {
//             str = str + ' ';
//         }
//         tower.push(str);
//     }
//     return tower;
// }

// towerBuilder(8);


// SOLUTION
function towerBuilder(n) {
    return Array.from({
        length: n
    }, function (v, k) {
        const spaces = ' '.repeat(n - k - 1);
        return spaces + '*'.repeat(k + k + 1) + spaces;
    });
}

console.log(towerBuilder(8));

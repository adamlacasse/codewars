
const snail = (array) => {
    let result = [];

    if (array.length == 0)
        return result;

    let max = array.length - 1;

    //grab the first row
    for (let i = 0; i <= max; i++) {
        result.push(array[0][i]);
    }

    //grab the last column
    for (let i = 1; i < max; i++) {
        result.push(array[i][max]);
    }

    //grab the last row
    for (let i = max; i >= 0; i--) {
        result.push(array[max][i]);
    }

    //grab the first column
    for (let i = max - 1; i > 0; i--) {
        result.push(array[i][0]);
    }

    subarray = [];
    //form the inner matrix
    for (let i = 1; i < max; i++) {
        subarray.push(array[i].splice(1, max - 1));
    }

    //call it recursively
    result = result.concat(snail(subarray));

    return result;
}

const input = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
const input2 = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
]
const input3 = [
    [01, 02, 03, 04, 05],
    [06, 07, 08, 09, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25]
];

console.log(snail(input3))

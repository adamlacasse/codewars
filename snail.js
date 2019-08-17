/*
Snail Sort
Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.

array = [[1,2,3],
         [4,5,6],
         [7,8,9]]
snail(array) #=> [1,2,3,6,9,8,7,4,5]
For better understanding, please follow the numbers of the next array consecutively:

array = [[1,2,3],
         [8,9,4],
         [7,6,5]]
snail(array) #=> [1,2,3,4,5,6,7,8,9]

This image will illustrate things more clearly: https://photos.google.com/photo/AF1QipPgbMbFj3lMPumEF8c3vyRcF3ZWIjRjFTKZokXH

NOTE: The idea is not sort the elements from the lowest value to the highest; the idea is to traverse the 2-d array in a clockwise snailshell pattern.

NOTE 2: The 0x0 (empty matrix) is represented as [[]]
*/

const input = [
    [01, 02, 03, 04, 05],
    [06, 07, 08, 09, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25]
];

// const outputArr = [];

const snail = (array) => {
    const cursor = array.slice();
    for (i = 0; i < array.length; i++) {
        if (i === 0) {
            cursor[i][array.length-1] = 'x';
        } else {
            console.log(`outside i: ${i}`);
        }
        
    }
    console.log(cursor);
}

snail(input);
// console.log(outputArr);

// outputArr.push(array[i][j]);

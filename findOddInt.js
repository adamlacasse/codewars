// Given an array, find the int that appears an odd number of times.
// There will always be only one integer that appears an odd number of times.
// https://www.codewars.com/kata/54da5a58ea159efa38000836/train/javascript


const findOdd = (arr) => {
    const counter = (num) => {
        console.log(arr.filter(e => e === num).length) 
    }
    arr.forEach(e => {
        counter(e)
    });

}

const sample = [1, 79, 8, 11, 22, 15, 79, 1045, 3222, 79, 4, 3222, 1045];
findOdd(sample);


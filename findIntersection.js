// From coder bytes

const input1 = ["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"]
// Output: 1,4,13

const input2 = ["1, 3, 9, 10, 17, 18", "1, 4, 9, 10"]
// Output: 1,9,10

const findIntersection = (strArr) => {
    const arr0 = strArr[0].split(", ");
    const arr1 = strArr[1].split(", ");
    const result = [];
    
    arr0.forEach(e => {
        if(arr1.includes(e)) {
            result.push(e);
        }
    });

    arr1.forEach(e => {
        if(arr0.includes(e) && !result.includes(e)) {
            result.push(e);
        }
    });

    const resultString = result.join(", ")

    return resultString;
}

console.log(findIntersection(input1));
console.log(findIntersection(input2));

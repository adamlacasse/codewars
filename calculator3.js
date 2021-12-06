// https://www.codewars.com/kata/5235c913397cbf2508000048/train/javascript
// Calculator().evaluate("2 / 2 + 3 * 4 - 6") # => 7

const sampleString = "2 / 2 + 3 * 4 - 6" // 7 ||| 1 + 12 - 6
const tryAnotha = "2 * 4 - 8 + 42 / 6 - 7" // 8 - 8 + 42 / 6 - 7 ||| 8 - 8 + 7 - 7

// go through string and do multiplication
// go through new string and do division
// go through new string and do addition & subtraction

class Calculator {
    evaluate = (str) => {
        const arr = str.split(' ');
        const newArr = [];

        arr.forEach((char, i) => {
            switch (char) {
                case "*":
                    parseInt(arr[i - 1]) * parseInt(arr[i + 1]);
                    arr.splice(i-1, 3);
                    break;
                case "/":
                    parseInt(arr[i - 1]) / parseInt(arr[i + 1]);
                    arr.splice(i-1, 3);
                    break;
                default:
                    break;
            }
        });
        // recursion
        console.log(arr)
    }
}



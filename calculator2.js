// https://www.codewars.com/kata/5235c913397cbf2508000048/train/javascript
// Calculator().evaluate("2 / 2 + 3 * 4 - 6") # => 7

const sampleString = "2 / 2 + 3 * 4 - 6" // 7
const tryAnotha = "2 * 4 - 8 + 42 / 6 - 7"
const array = tryAnotha.split(' ');

const ledger = {
    add: [],
    subtract: []
}

const calculate = (arr) => {
    while (array.length > 0) {
        arr.forEach((e, i) => {
            switch (e) {
                case "*":
                    ledger.add.push(parseInt(arr[i-1]) * parseInt(arr[i+1]));
                    array.splice(i-1, 3);
                    break;
                case "/":
                    ledger.add.push(parseInt(arr[i-1]) / parseInt(arr[i+1]));
                    array.splice(i-1, 3);
                    break;
                case "+":
                    if (parseInt(arr[i+1])) {
                        ledger.add.push(parseInt(arr[i+1]));
                        array.splice(i, 2);
                    } else {
                        array.splice(i, 1)
                    }
                    break;
                case "-":
                    if (parseInt(arr[i+1])) {
                        ledger.subtract.push(parseInt(arr[i+1]));
                        array.splice(i, 2);
                    } else {
                        array.splice(i, 1)
                    }
                    break;
                default:
                    break;
            }
        });
        calculate(array);
    }
}


calculate(array);
const total = ledger.add.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
                - ledger.subtract.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log({ ledger, array, total })

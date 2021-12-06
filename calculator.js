// https://www.codewars.com/kata/5235c913397cbf2508000048/train/javascript
// Calculator().evaluate("2 / 2 + 3 * 4 - 6") # => 7

const sampleString = "2 / 2 + 3 * 4 - 6" // 7
const array = sampleString.split(' ');

const ledger = {
    multiply: [],
    divide: [],
    add: [],
    subtract: []
}

const findDividesAndMultiplies = (arr) => {
    arr.forEach((e, i) => {
        switch (e) {
            case "/":
                ledger.divide.push(parseInt(arr[i-1]));
                ledger.divide.push(parseInt(arr[i+1]));
                array.splice(i-1, 3);
                break;
            case "*":
                ledger.multiply.push(parseInt(arr[i-1]));
                ledger.multiply.push(parseInt(arr[i+1]));
                array.splice(i-1, 3);
                break;
            default:
                break;
        }
    });
    findAdds(array);
}

const findAdds = (arr) => {
    arr.forEach((e, i) => {

        switch (e) {
            case "+":
                if (parseInt(arr[i+1])) {
                    ledger.add.push(parseInt(arr[i+1]));
                    array.splice(i, 2);
                } else {
                    array.splice(i, 1)
                }
                break;
            default:
                break;
        }
    });
    findSubtracts(array)
}

const findSubtracts = (arr) => {
    arr.forEach((e, i) => {

        switch (e) {
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
}

findDividesAndMultiplies(array)
console.log({ ledger, array })

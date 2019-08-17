// console.log(sumStrings('712569312664357328695151392', '8100824045303269669937'))
// Now get '7.125774134884027e+26' but need to get '712577413488402631964821329' which are the same
// 4.5e6 means 4.5 times ten to the sixth power, or 4500000 which is the same as 4,500,000
// So.... '7.125774134884027e+26' = 7.125... times 10 to the 26th power

// function sumStrings(a, b) {
//     let aInt = 0;
//     let bInt = 0;
//     if (a.length > 21) {
//         console.log('a is a biggun')
//     } else { aInt = parseInt(a) }
//     if (b.length > 21) {
//         console.log('b is a biggun')
//     } else { bInt = parseInt(b) }
//     console.log(`sum: ${aInt + bInt}`)
// }

// sumStrings('712569312664357328695151392', '8100824045303269669937')
// sumStrings('5', '6')

// const summer = (a, b) => {
//     let top = '';
//     let bottom = '';
//     if (a.length >= b.length) {
//         top = a;
//         bottom = b.padStart(a.length, '0')
//     } else {
//         top = b;
//         bottom = a.padStart(b.length, '0');
//     }
//     let topReversed = top.split('').reverse();
//     let bottomReversed = bottom.split('').reverse();
//     let sum = [];
//     let carryOver = 0;

//     for (i = 0; i < topReversed.length; i++) {
//         let topVal = parseInt(topReversed[i]);
//         let botVal = parseInt(bottomReversed[i]);
//         let total = carryOver + topVal + botVal;

//         if (total > 9) {
//             sum.push(total.toString()[1]);
//             carryOver = parseInt(total.toString()[0]);
//         } else {
//             carryOver = 0;
//             sum.push(total.toString());
//         }
//     }
//     if (carryOver) {
//         sum.push(carryOver)
//     }
//     const result = sum.reverse().join('').replace(/^0+/, '');
//     return result
// }

// summer('712569312664357328695151392', '8100824045303269669937')

// BEST PRACTICE

function sumStrings(a, b) {
    var res = '',
        c = 0;
    a = a.split('');
    b = b.split('');
    while (a.length || b.length || c) {
        c += ~~a.pop() + ~~b.pop(); // ~~ is another way of doing Math.floor()
        res = c % 10 + res;
        c = c > 9;
    }
    return res.replace(/^0+/, '');
}

console.log(sumStrings('712569312664357328695151392', '8100824045303269669937') == '712577413488402631964821329')

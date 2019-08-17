/*
You will be given a number and you will need to return it as a string in Expanded Form. For example:

expandedForm(12); // Should return '10 + 2'
expandedForm(42); // Should return '40 + 2'
expandedForm(70304); // Should return '70000 + 300 + 4'
NOTE: All numbers will be whole numbers greater than 0.
*/

// function expandedForm(num) {
//     const str = num.toString();
//     const arr = [];
//     for (i = 0; i < str.length; i++) {
//         let len = str.length - i;
//         let nthPlace = '';
//         for (j = 0; j < len; j++) {
//             if (j === 0) {
//                 nthPlace = str[i];
//             } else {
//                 nthPlace = nthPlace + '0'
//             }
//         }
//         if (parseInt(nthPlace) !== 0) {
//             arr.push(nthPlace);
//         }
//     }
//     const res = arr.join(' + ');
//     return res;
// }

// BEST PRACTICE
const expandedForm = (n) => {
    const res =
        n.toString()
        .split("")
        .reverse()
        .map((a, i) => a * Math.pow(10, i))
        .filter(a => a > 0)
        .reverse()
        .join(" + ");
    console.log(res);
}


expandedForm(12)
expandedForm(42)
expandedForm(70304)

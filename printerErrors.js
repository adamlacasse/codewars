/*
In a factory a printer prints labels for boxes. For one kind of boxes the printer has to use colors which, for the sake of simplicity, are named with letters from a to m.

The colors used by the printer are recorded in a control string. For example a "good" control string would be aaabbbbhaijjjm meaning that the printer used three times color a, four times color b, one time color h then one time color a...

Sometimes there are problems: lack of colors, technical malfunction and a "bad" control string is produced e.g. aaaxbbbbyyhwawiwjjjwwm with letters not from a to m.

You have to write a function printer_error which given a string will output the error rate of the printer as a string representing a rational whose numerator is the number of errors and the denominator the length of the control string. Don't reduce this fraction to a simpler expression.

The string has a length greater or equal to one and contains only letters from a to z.

#Examples:

s="aaabbbbhaijjjm"
error_printer(s) => "0/14"

s="aaaxbbbbyyhwawiwjjjwwm"
error_printer(s) => "8/22"
*/

// const printerError = (s) => {
//     const regExp = /[a-mA-M]/;
//     let fail = [];
//     [...s].forEach((l) => {
//         if(!l.match(regExp)) {
//             fail.push(l)
//         }
//     });
//     return `${fail.length}/${s.length}`;
// }


// BEST PRACTICE (this one I should have known)...
function printerError(s) {
    return s.match(/[n-z]/gi) ? `${s.match(/[n-z]/gi).length}/${s.length}` : `0/${s.length}`;
}

const ex1 = "aaabbbbhaijjjm"
const ex2 = "aaaxbbbbyyhwawiwjjjwwm"
console.log(printerError(ex1))
console.log(printerError(ex2))


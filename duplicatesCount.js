/*
>> INSTRUCTIONS
Count the number of Duplicates
Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

Example
"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1 # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2 # 'a' and '1'
"ABBA" -> 2 # 'A' and 'B' each occur twice
*/

// >> MY SOLUTION
// const howManyUniques = (str, char) => {
//     return str.split(char).length-1;
// }

// const duplicateCount = (input) => {
//     const lowerCaseInput = input.toLowerCase()
//     const arr = lowerCaseInput.split('');
//     const results = [];
//     arr.forEach(e => {
//         if(howManyUniques(lowerCaseInput, e) > 1) {
//             results.push(e);
//         }
//     });
//     const noDupArr = [...new Set(results)];
//     console.log(noDupArr.length);
// }

// >> BEST PRACTICE SOLUTION...
const duplicateCount = (text) => {
    console.log((text.toLowerCase().split('').sort().join('').match(/([^])\1+/g) || []).length)
    // split() turns the string into an array
    // sort sorts the array alphabetically (puts numbers first, then uppercase letters, then lowercase - thus the need for toLowerCase())
    // join() puts the array back into a string
    // match(regEx) searches a string for a match against a regular expression and returns the matches as an array
        // NOTE TO SELF: there's no way I would have come up with that regular expression. Those things are opaque.
}

duplicateCount("abcdeeeeeeee");
duplicateCount("aabbcde");
duplicateCount("aabBcde");
duplicateCount("indivisibility");
duplicateCount("Indivisibilities");
duplicateCount("aA11");
duplicateCount("ABBA");

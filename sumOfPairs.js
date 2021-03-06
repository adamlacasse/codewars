/*
sum_pairs([11, 3, 7, 5],         10)
#              ^--^      3 + 7 = 10
== [3, 7]

sum_pairs([4, 3, 2, 3, 4],         6)
#          ^-----^         4 + 2 = 6, indices: 0, 2 *
#             ^-----^      3 + 3 = 6, indices: 1, 3
#                ^-----^   2 + 4 = 6, indices: 2, 4
#  * entire pair is earlier, and therefore is the correct answer
== [4, 2]

sum_pairs([0, 0, -2, 3], 2)
#  there are no pairs of values that can be added to produce 2.
== None/nil/undefined (Based on the language)

sum_pairs([10, 5, 2, 3, 7, 5],         10)
#              ^-----------^   5 + 5 = 10, indices: 1, 5
#                    ^--^      3 + 7 = 10, indices: 3, 4 *
#  * entire pair is earlier, and therefore is the correct answer
== [3, 7]

Negative numbers and duplicate numbers can and will appear.

NOTE: There will also be lists tested of lengths upwards of 10,000,000 elements. Be sure your code doesn't time out.
*/

const sum_pairs = (ints, s) => {
    let potentials = [];
    let indexArr = [];
    for (i = 0; i < ints.length; i++) {
        for (j = i+1; j < ints.length; j++) {
            // console.log(`adding ${ints[i]} and ${ints[j]}`)
            if (ints[i] + ints[j] == s) {
                indexArr.push(j);
                potentials.push([ints[i], ints[j]]);
            }
        }
    }
    const winIndex = Math.min(...indexArr);
    // console.log(potentials)
    // console.log(indexArr)
    // console.log(winIndex)
    // console.log(potentials[indexArr.indexOf(winIndex)])
    return potentials[indexArr.indexOf(winIndex)];
}

sum_pairs([5,1,3,6,4,7,5], 100);

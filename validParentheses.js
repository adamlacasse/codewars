const ex1 = "()" // true
const ex2 = ")(()))" // false
const ex3 = "(" // false
const ex4 = "(())((()())())" // true
const ex5 = ')()))()(' // false
const ex6 = '()()((())(()))' // true
const ex7 = '(()()(()))' // true

const validParentheses = (str) => {
    if (str.length % 2 === 1 || str[0] === ')' || str[str.length-1] === '(') {
        console.log('odd number or begins with close or ends with open')
        return false;
    }
    var goodOnes = [];
    var openSet = [];
    var closedSet = [];
    for (i = 0; i < str.length; i++) {
        if (str[i] === "(" && str[i+1] === ")") {
            goodOnes.push(i, i+1);
        } else if (str[i] === "(") {
            openSet.push(i)
        } else if (str[i] === ")") {
            closedSet.push(i)
        } else { console.log(`Where does ${i} go?`) }
    }
    console.log(goodOnes)
    console.log(openSet)
    console.log(closedSet)
}

validParentheses(ex7)

// (())(((
// )())())
// lrllrlr
// rlrllrl
// )()(()(
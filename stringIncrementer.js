function incrementString (strng) {
    let num = '';
    let str = '';
    let finalOutput = ''

    for (i = 0; i < strng.length; i++) {
        if(parseInt(strng[i]) || strng[i] == 0) {
            num += strng[i];
        } else {
            str += strng[i];
        }
    }
    
    if (num.length === 0) {
        finalOutput = str + '1'
    } else {
        const numLength = num.length;
        const incrementedNum = (parseInt(num) + 1).toString()
        num = incrementedNum.padStart(numLength, '0');
        finalOutput = str + num
    }
    
    return finalOutput;
}

console.log(incrementString('foo'))
console.log(incrementString('foobar23'))
console.log(incrementString('foo0042'))
console.log(incrementString('foo9'))
console.log(incrementString('foo099'))

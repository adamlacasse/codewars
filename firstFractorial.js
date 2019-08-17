function FirstFactorial(num) {
    const arr = [];
    for (i = 1; i <= num; i++) {
        arr.push(i);
    }
    const res = arr.reduce((acc, cv) => acc * cv)
    return res;
}

FirstFactorial(8);

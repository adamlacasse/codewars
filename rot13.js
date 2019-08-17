const rot13 = (message) => {
    const lowers = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    const uppers = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

    const newIndexFinder = (i) => {
        if (i > 12) {
            return i - 13;
        } else {
            return i + 13;
        }
    }

    let res = [];
    for (i = 0; i < message.length; i++) {
        let lowercase = message[i];
        let uppercase = message[i].toUpperCase();
        if (lowers.indexOf(lowercase) !== -1) {
            let newIndexLower = newIndexFinder(lowers.indexOf(lowercase))
            res.push(lowers[newIndexLower])
        } else if (uppers.indexOf(uppercase) !== -1) {
            let newIndexUpper = newIndexFinder(uppers.indexOf(uppercase))
            res.push(uppers[newIndexUpper])
        } else {
            res.push(message[i])
        }
    }
    // console.log(res)
    return res.join('');
}

rot13('Tes!t>') // 'test' returns 'grfg'; 'Test' returns 'Grfg'

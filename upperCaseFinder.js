const letters = /^[a-zA-Z]/;
const upperLetter = /^[A-Z]/;
let message = '';

const check = (val) => {
    if (typeof val === 'object' || typeof val === 'number') {
        message = 'is not a string';
    } else if (val.match(letters) && val.match(upperLetter)) {
        message = `begins with an uppercase`;
    } else if (val.match(letters)) {
        message = `begins with a lowercase`;
    } else {
        message = `begins with a non-letter`;
    }
    console.log(`${val} ${message}`);
}

check('abc123');
check('Abc123');
check('123Abc');
check('*abc');
check(null);
check(NaN);
check(42);
check(['foo', 'bar', 'baz']);
check({foo: 'bar', baz: 'qux'});

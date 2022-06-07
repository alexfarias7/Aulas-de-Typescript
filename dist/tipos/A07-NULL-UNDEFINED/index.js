export function createPerson(firstname, lastname) {
    return {
        firstname,
        lastname,
    };
}
export function squareOf(x) {
    if (typeof x === 'number')
        return x * x;
    return null;
}
console.log(squareOf(8));
const stringsquare = squareOf('2');
if (stringsquare === null) {
    console.log('invalid');
}
else {
    console.log(stringsquare * 100);
}
//# sourceMappingURL=index.js.map
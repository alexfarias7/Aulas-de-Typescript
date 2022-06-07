"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.squareOf = exports.createPerson = void 0;
function createPerson(firstname, lastname) {
    return {
        firstname,
        lastname,
    };
}
exports.createPerson = createPerson;
function squareOf(x) {
    if (typeof x === 'number')
        return x * x;
    return null;
}
exports.squareOf = squareOf;
console.log(squareOf(8));
const stringsquare = squareOf('2');
if (stringsquare === null) {
    console.log('invalid');
}
else {
    console.log(stringsquare * 100);
}

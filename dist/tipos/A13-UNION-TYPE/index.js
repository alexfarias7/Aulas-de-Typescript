"use strict";
function add(a, b) {
    if (typeof a === 'number' && typeof b === 'number')
        return a + b;
    return `${a}+${b}`;
}
console.log(add(10, 200));
console.log(add(10, '200'));
//# sourceMappingURL=index.js.map
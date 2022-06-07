"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setColors = void 0;
const person = {
    nome: 'alex',
    idade: 25,
    salario: 1500,
};
function setColors(person, color) {
    return Object.assign(Object.assign({}, person), { color: color });
}
exports.setColors = setColors;
console.log(setColors(person, 'black'));

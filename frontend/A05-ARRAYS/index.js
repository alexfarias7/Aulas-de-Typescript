"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpperCase = exports.concatenaString = exports.multiplique = void 0;
function multiplique(...args) {
    return args.reduce((ac, valor) => ac * valor, 1);
}
exports.multiplique = multiplique;
function concatenaString(...args) {
    return args.reduce((ac, valor) => ac + valor);
}
exports.concatenaString = concatenaString;
function UpperCase(...args) {
    return args.map((valor) => valor.toLocaleUpperCase());
}
exports.UpperCase = UpperCase;
const Upper = UpperCase('b', 'c', 'd', 'e');
const result = multiplique(1, 2, 3, 4);
const concatenaçao = concatenaString('a', 'b', 'c', 'd');
console.log(result, concatenaçao, Upper);

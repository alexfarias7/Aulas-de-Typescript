export function multiplique(...args) {
    return args.reduce((ac, valor) => ac * valor, 1);
}
export function concatenaString(...args) {
    return args.reduce((ac, valor) => ac + valor);
}
export function UpperCase(...args) {
    return args.map((valor) => valor.toLocaleUpperCase());
}
const Upper = UpperCase('b', 'c', 'd', 'e');
const result = multiplique(1, 2, 3, 4);
const concatenaçao = concatenaString('a', 'b', 'c', 'd');
console.log(result, concatenaçao, Upper);
//# sourceMappingURL=index.js.map
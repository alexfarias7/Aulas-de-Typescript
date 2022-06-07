const person = {
    nome: 'alex',
    idade: 25,
    salario: 1500,
};
export function setColors(person, color) {
    return {
        ...person,
        color: color,
    };
}
console.log(setColors(person, 'black'));
//# sourceMappingURL=index.js.map
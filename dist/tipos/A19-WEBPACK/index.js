import './form';
export function testeThis(argumet, age) {
    console.log(this);
    console.log(argumet, age);
}
testeThis.call(new Date(), 'alex', 25);
//# sourceMappingURL=index.js.map
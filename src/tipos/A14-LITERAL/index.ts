let x = 10;
x = 100;

let a= 100 as const; // eslint-disable-line
console.log(a);

const person = {
  nome: 'alex' as const,
  sobrenome: 'farias',
};

function changeColors(color: 'red' | 'yellow' | 'blue') {
  return color;
}
console.log(changeColors('red'));
export default 1;

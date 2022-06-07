export function multiplique(...args: Array<number>) {
  return args.reduce((ac, valor) => ac * valor, 1);
}

export function concatenaString(...args: string[]): string {
  return args.reduce((ac, valor) => ac + valor);
}
export function UpperCase(...args: string[]) {
  return args.map((valor) => valor.toLocaleUpperCase());
}

const Upper = UpperCase('b', 'c', 'd', 'e');

const result = multiplique(1, 2, 3, 4);
const concatenaçao = concatenaString('a', 'b', 'c', 'd');
console.log(result, concatenaçao, Upper);

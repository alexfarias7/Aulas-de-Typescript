type Idade = number;
type colorRgb = 'red' | 'green' | 'blue';
type blackWhite = 'black' | 'white';
type changeColor = colorRgb | blackWhite;

type Person = {
  nome: string;
  idade: Idade;
  salario: number;
  color?: string;
};

const person: Person = {
  nome: 'alex',
  idade: 25,
  salario: 1500,
};

export function setColors(person: Person, color: changeColor): Person {
  return {
    ...person,
    color: color,
  };
}

console.log(setColors(person, 'black'));

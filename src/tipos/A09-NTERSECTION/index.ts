type haveName = { name: string };
type haveAge = { age: number };

type Person = haveAge & haveName;

type ab = 'a' | 'b';

type ac = 'a' | 'c';
type abc = ab & ac;

const person: Person = {
  name: 'luiz',
  age: 25,
};

console.log(person);

export { person };

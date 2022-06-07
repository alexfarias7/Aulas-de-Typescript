@decorator
export class Animal {
  constructor(public cor: string, public name: string) {}
}

function decorator<T extends new (...args: any[]) => any>(target: T) {
  return class extends target {
    cor: string;
    name: string;
    constructor(...args: any[]) {
      super(...args);
      this.cor = args[0].split('').reverse().join('');
      this.name = args[1].split('').reverse().join('');
    }
    inverte(valor: string): string {
      return valor.split('').reverse().join('');
    }
  };
}

const AnimalDecorator = decorator(Animal);
const animal = new AnimalDecorator('roxo', 'alex');
console.log(animal);

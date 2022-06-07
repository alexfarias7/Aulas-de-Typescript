function Invertenomeecor<T extends new (...args: any[]) => any>(target: T) {
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
@Invertenomeecor
export class Animal {
  constructor(public nome: string, public cor: string) {
    console.log('sou uma classe');
  }
}

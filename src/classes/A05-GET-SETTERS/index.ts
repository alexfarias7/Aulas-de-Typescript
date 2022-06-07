export class Pessoa {
  constructor(
    private nome: string,
    private sobrenome: string,
    private idade: number,
    private _cpf: string,
  ) {
    this.cpf = _cpf;
  }

  set cpf(valor: string) {
    console.log('setter invocado');
    this._cpf = valor;
  }

  get cpf(): string {
    return this._cpf.replace(/\D/g, '');
  }
}
const pessoa = new Pessoa('luiz', 'farias', 25, '5555555');
pessoa.cpf = '123545645454';
console.log(pessoa.cpf);

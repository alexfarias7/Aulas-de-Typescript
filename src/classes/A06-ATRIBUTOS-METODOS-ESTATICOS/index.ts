export class Pessoa {
  static idadepadrao = 0;
  static cpfPadrao = '00000000000000';
  constructor(
    public nome: string,
    public sobrenome: string,
    public idade: number,
    public cpf: string,
  ) {}

  static falaOi(): void {
    console.log('ola mundo');
  }
  metodoNormal(): void {
    console.log(Pessoa.cpfPadrao, Pessoa.idadepadrao);
  }

  static criaPessoa(nome: string, sobrenome: string): Pessoa {
    return new Pessoa(nome, sobrenome, Pessoa.idadepadrao, Pessoa.cpfPadrao);
  }
}
const pessoa = new Pessoa('luiz', 'farias', 25, '5555555');
const pessoa2 = Pessoa.criaPessoa('maria', 'miarada');
pessoa.cpf = '123545645454';
console.log(pessoa.cpf);
pessoa.metodoNormal();
Pessoa.falaOi();

interface TipoNome {
  nome: string;
  sobrenome: string;
}
interface TipoSobreNome {
  sobrenome: string;
}
interface TipoNomeCompleto {
  nomeCompleto(): string;
}

type Nuemero = number | string;

type TipoPessoa = TipoNome & TipoSobreNome & TipoNomeCompleto;

interface TipoPessia2 extends TipoNome, TipoSobreNome, TipoNomeCompleto {}
export class Pessoa implements TipoPessia2 {
  constructor(public nome: string, public sobrenome: string) {}

  nomeCompleto(): string {
    return `${this.nome} ${this.sobrenome}`;
  }
}
const pessoa2: TipoPessia2 = {
  nomeCompleto() {
    return `${this.nome} ${this.sobrenome}`;
  },
  nome: 'alex',
  sobrenome: 'farias',
};
const pessoa = new Pessoa('luiz', 'miranda');
console.log(pessoa.nomeCompleto());
console.log(pessoa2.nomeCompleto());

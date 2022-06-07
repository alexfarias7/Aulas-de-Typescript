type TipoNome = {
  nome: string;
  sobrenome: string;
};
type TipoSobreNome = {
  sobrenome: string;
};
type TipoNomeCompleto = {
  nomeCompleto(): string;
};

export class Pessoa implements TipoNome, TipoSobreNome, TipoNomeCompleto {
  constructor(public nome: string, public sobrenome: string) {}

  nomeCompleto(): string {
    return `${this.nome} ${this.sobrenome}`;
  }
}

const pessoa = new Pessoa('luiz', 'miranda');
console.log(pessoa.nomeCompleto());

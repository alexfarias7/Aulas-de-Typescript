interface Pessoa {
  nome: string;
}

interface Pessoa {
  readonly sobrenome: string;
}
interface Pessoa {
  readonly enderecos: readonly string[];
}
interface Pessoa {
  readonly idade?: number;
}

const pessoa: Pessoa = {
  nome: 'ALEX',
  sobrenome: 'farias',
  enderecos: ['AV.bRASIL'],
};
console.log(pessoa);

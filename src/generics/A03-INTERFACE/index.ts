interface PessoaProtocolo<T = string, U = number> {
  nome: T;
  sobrenome: T;
  idade: U;
}

const aluno1: PessoaProtocolo<string, number> = {
  nome: 'luiz',
  sobrenome: 'sobremnome',
  idade: 25,
};
const aluno2: PessoaProtocolo = {
  nome: 'luiz',
  sobrenome: 'sobremnome',
  idade: 25,
};

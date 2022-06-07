export const object01: Record<string, string | number> = {
  nome: 'alex',
  sobrenome: 'farias',
  idade: 25,
};
console.log(object01);

type PessoaProtocol = {
  nome?: 'alex';
  sobrenome?: 'farias';
  idade?: 25;
};
//* required
type PessoaRequired = Required<PessoaProtocol>;
//* partial
type PessoaPartial = Partial<PessoaRequired>;

//* readonly
type PessoaReadOnly = Readonly<PessoaRequired>;

//* PICK

type PessoaPick = Pick<PessoaRequired, 'nome' | 'sobrenome'>;
const object02: PessoaRequired = {
  nome: 'alex',
  sobrenome: 'farias',
  idade: 25,
};
console.log(object02);
//* extract e exclude

type abc = 'a' | 'b' | 'c';
type cde = 'c' | 'd' | 'e';
type tipoExclude = Exclude<abc, cde>;
type tipoextract = Extract<abc, cde>;

type accountmongo = {
  _id: string;
  nome: string;
  idade: number;
};
type accountapi = {
  id: string;
  nome: string;
  idade: number;
};

type acountApi = Pick<accountmongo, Exclude<keyof accountmongo, '_id'>> & {
  id: string;
};
const accountmongodb: accountmongo = {
  _id: '4d44d4d54d',
  nome: 'luix',
  idade: 25,
};

function mapaccount(accountmongo: accountmongo): accountapi {
  const { _id, ...acountdata } = accountmongo;
  return { ...acountdata, id: _id };
}
//

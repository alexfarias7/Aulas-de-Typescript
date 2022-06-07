/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/no-unused-vars */
namespace MeuNamespace {
  const nome = 'alex';

  export class PessoaNamespace {
    constructor(public name: string) {}
  }

  const pessoaNamespae = new PessoaNamespace('luiz');
  console.log(pessoaNamespae);
}

const pessoaNamespace = new MeuNamespace.PessoaNamespace('LUIZ');
console.log(pessoaNamespace);

export default 1;

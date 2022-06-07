type ObterChaves = <O, K extends keyof O>(objeto: O, chave: K) => O[K];
const obterChaves: ObterChaves = (objeto, chave) => objeto[chave];

const animal = {
  cor: 'rosa',
  pais: ['brasil', 'uruguai'],
  idade: 25,
};

const cor = obterChaves(animal, 'cor');
const pais = obterChaves(animal, 'pais');
console.log(cor, pais);

const objectA: {
  readonly chaveA: string;
  chaveB: string;
  chaveC?: string;
  [key: string]: unknown;
} = {
  chaveA: 'Valor A',
  chaveB: 'Valor B',
};

//objectA.chaveA = 'um valor de a';
objectA.chaveC = 'novo valor';
objectA.chaveD = 'NOVA CHAVE';

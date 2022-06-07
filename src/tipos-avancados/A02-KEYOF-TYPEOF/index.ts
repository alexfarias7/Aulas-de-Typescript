/* type CoresObj = {
  vermelho: string;
  verde: string;
  azul: string;
}; */

type CoresObj = typeof colorsObj;
type CoresChaves = keyof CoresObj;

const colorsObj = {
  vermelho: 'red',
  verde: 'green',
  azul: 'blue',
  roxo: 'purple',
};
/* function translationColor(cor: 'vermelho' | 'verde' | 'azul', cores: CoresObj) { */
function translationColor(cor: CoresChaves, cores: CoresObj) {
  return cores[cor];
}

console.log(translationColor('azul', colorsObj));
console.log(translationColor('roxo', colorsObj));

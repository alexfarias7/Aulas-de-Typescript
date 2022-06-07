const dadosC1: readonly [number, string] = [1, 'alex'];
const dadosC2: [number, string, string?] = [1, 'alex', 'farias'];

//dadosC1[0] = 100;
dadosC2[1] = 'carlos';
console.log(dadosC1);
console.log(dadosC2);

const array1: readonly string[] = ['alex', ' farias'];
const array2: ReadonlyArray<string> = ['ALEX', 'FARIAS'];

console.log(array1, array2);

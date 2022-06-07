export function createPerson(
  firstname: string,
  lastname?: string,
): {
  firstname: string;
  lastname?: string;
} {
  return {
    firstname,
    lastname,
  };
}

export function squareOf(x: any) {
  if (typeof x === 'number') return x * x;
  return null;
}

console.log(squareOf(8));

const stringsquare = squareOf('2');
if (stringsquare === null) {
  console.log('invalid');
} else {
  console.log(stringsquare * 100);
}

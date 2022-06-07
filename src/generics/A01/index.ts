const arraynum = [1, 2, 3, 4, 5];
console.log(arraynum.filter((value) => value < 3));

type FilterCallback<U> = (value: U, index?: number, array?: U[]) => boolean;

export function meuFilter<T>(array: T[], callbackfn: FilterCallback<T>): T[] {
  const novoarray = [];
  for (let i = 0; i < array.length; i++) {
    if (callbackfn(array[i])) {
      novoarray.push(array[i]);
    }
  }
  return novoarray;
}

const array2 = meuFilter(arraynum, (value) => value < 5);
console.log(array2);

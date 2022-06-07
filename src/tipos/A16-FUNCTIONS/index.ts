type MapsStrigsFn = (item: string) => string;

function mapStrings(arrays: string[], callbackFn: MapsStrigsFn): string[] {
  const newArray: string[] = [];

  for (let i2 = 0; i2 < arrays.length; i2++) {
    const item = arrays[i2];
    newArray.push(callbackFn(item));
  }
  return newArray;
}
const abc = ['a', 'b', 'c'];
const abcMap = mapStrings(abc, (item) => item.toUpperCase());
console.log(abcMap);
export default 1;

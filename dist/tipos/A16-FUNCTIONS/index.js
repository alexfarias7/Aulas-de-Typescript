function mapStrings(arrays, callbackFn) {
    const newArray = [];
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
//# sourceMappingURL=index.js.map
type MEUTIP = number;

const arrayNum: Array<number> = [1, 2, 3, 4, 5];
console.log(arrayNum);

async function promiseAsync() {
  return 1;
}
function minhaPromise(): Promise<MEUTIP> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(1);
    }, 1000);
  });
}
promiseAsync().then((resultado) => console.log(resultado + 1));

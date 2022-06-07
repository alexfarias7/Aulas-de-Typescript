//* assertion
const body2 = document.querySelector('body') as HTMLBodyElement;
body2.style.background = 'red';

const input = document.querySelector('input') as HTMLInputElement;
input.focus();
input.style.background = 'blue';

//* não é recomendavel
const body3 = document.querySelector('body') as unknown as number;

//* non-null assertion (!)
const body = document.querySelector('body')!;
export default 1;

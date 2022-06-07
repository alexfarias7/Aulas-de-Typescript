import './form';

export function testeThis(this: Date, argumet: string, age: number): void {
  console.log(this);
  console.log(argumet, age);
}
testeThis.call(new Date(), 'alex', 25);

/* eslint-disable*/

let nome: string = 'luiz';
let idade: number = 30;
let isAdult: boolean = true;
let simbolo: symbol = Symbol('QUALYQER SYMBOL');


//* ARRAYS
 let arrayNumber:Array<number>=[1,2,3,4,5];
 let arrayNumber2:number[]=[1,2,3,4,5];
 let arrayString:Array<string>=['a','b','c','d','e'];


 //* objetos

 let person:{nome:string, idade:number, adulto?:boolean}={
   idade:20,
   nome:'alex'
 }

 //* functions

 function soma(x:number,y:number){

  return x+y

 }

 const result = soma(2,5)

 const soma2:(x:number, y:number)=>number=(x,y)=>x+y

 const result2=soma2(2,5)
 console.log(soma2)

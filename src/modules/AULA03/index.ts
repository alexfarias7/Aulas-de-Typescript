import validator from 'validator';

import __ from 'lodash';
console.log(validator.isEmail('luiz@email.com'));

const arraynum = [100, 200, 300, 400];

console.log(__.sum(arraynum));


.multi=function (array:number[]):number{
  return array.reduce((total,actual)=> total*actual,1)
}
console.log(.multi(arraynum))

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//* assertion
const body2 = document.querySelector('body');
body2.style.background = 'red';
const input = document.querySelector('input');
input.focus();
input.style.background = 'blue';
//* não é recomendavel
const body3 = document.querySelector('body');
//* non-null assertion (!)
const body = document.querySelector('body');
exports.default = 1;

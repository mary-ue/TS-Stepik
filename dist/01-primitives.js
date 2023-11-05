"use strict";
// number
let x = 10;
// let y = 1234n;  // должны быть целыми, не используем дробную часть ×1234.5n
let z = NaN;
// string
let str1;
str1 = 'Hello';
let symb = Symbol('as'); // let symb: symbol
// boolean
let o = true;
o = false;
// nothing
let h = undefined;
let g = null;
// literal (при использовании const)
const num = 108; // const num: 108
const str2 = 'str'; // const str2: "str"
// universal 
let mm = 1;
mm = 'str';
mm = [];
let xx = 2; // значение переменной узнаем позднее
// прежде, чем использовать методы, нужно будет уточнить тип
if (typeof xx === 'string')
    xx.toUpperCase();

"use strict";
const numbers = [1, 2, 3, 4];
const arr = ['1', 1, true];
const strs = [];
const strs2 = [];
strs.push('asv');
const cars = [];
// cars.push({ brand: 'Audi', wheels: 3 });
// массив внутри другого массива: [ [1, 2, 3], [4, 5, 6] ]
const arrOfArr = [];
arrOfArr.push(['', '']);
function printArr(arr) {
    arr.forEach((el, index) => {
        console.log(el, index);
    });
}

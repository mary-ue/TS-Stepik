"use strict";
function sum(a, b) {
    return a + b;
}
sum(2, 3);
const sum2 = (a, b) => a + b;
const sum3 = function (a, b) {
    return a + b;
};
// void - функция ничего не вернет во внешний мир, но завершится
function log(name) {
    console.log('Hello ', name);
}
// never - функция никогда не доведет работу до конца, return выполнен не будет
function crash() {
    throw new Error('crash');
}
// опциональные параметры - ?
function log2(name, userId) {
    console.log('Hello ', name, 'with ID: ', userId || 'anonym');
}
log2('Mikhail', 'id');
function average(...nums) {
    const sum = nums.reduce((current, total) => current + total, 0);
    return sum / nums.length;
}

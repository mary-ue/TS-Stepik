"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.example1 = void 0;
function example1(x) {
    if (typeof x === 'string') {
        x.toLocaleLowerCase();
    }
    else if (typeof x === 'number') {
        x.toFixed();
    }
    else if (x === undefined) {
        console.log('no value');
    }
    else {
        x; // (parameter) x: never
    }
}
exports.example1 = example1;
function example2(strs) {
    // if (typeof strs === 'object') {}; // null - тоже object →　не сработает
    if (strs && typeof strs === 'object') { // TS поймет, что массив
        // if (Array.isArray(strs)) // тоже валидный вариант
        strs.concat([]);
    }
    else if (typeof strs === 'string') {
        strs.toLocaleLowerCase();
    }
}
function example3(x) {
    if (x instanceof Date) {
        x.getMonth();
    }
    else {
        x.concat([]);
    }
}
function move(animal) {
    if ('swim' in animal) {
        return animal.swim();
    }
    return animal.fly();
}

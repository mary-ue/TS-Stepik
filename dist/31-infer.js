"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function fromPair(pair) {
    const [key, value] = pair;
    return {
        [key]: value
    };
}
// 1
const myPair = ['myKey', 'myValue'];
fromPair(myPair);
const myPair1 = ['myKey', 'myValue'];
fromPair(myPair1);
class Computer {
    constructor(brand) {
    }
}
let brand = '';
let dateArg;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createMap = exports.tuplePairCreator = void 0;
function tuplePairCreator(first) {
    return function (second) {
        return [first, second];
    };
}
exports.tuplePairCreator = tuplePairCreator;
const toTupleWith1 = tuplePairCreator(1);
const val1 = toTupleWith1(2); // const val1: [number, number]
const val2 = toTupleWith1('sd'); // const val2: [number, string]
// task 
function createMap(list) {
    return function (cb) {
        const result = [];
        for (let el of list) {
            result.push(cb(el));
        }
        return result;
    };
}
exports.createMap = createMap;
const mapNums = createMap([1, 2, 3]);
const result = mapNums((num) => num + 2);

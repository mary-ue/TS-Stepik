"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.values = exports.keys = exports.prop = void 0;
// U extends keyof T - сократи значения до ключей T (создай юнион из ключей объекта)
function prop(key, obj) {
    //            prop<T>(key: keyof T, obj: T): T[keyof T] {
    return obj[key];
}
exports.prop = prop;
const obj1 = { a: 1, b: 2, c: 3 }; // a, b, c
prop('a', obj1);
// prop('d', obj1);      // mistake
// task
function keys(obj) {
    const currentKeys = [];
    for (let key in obj) {
        if (obj.hasOwnProperty(key))
            currentKeys.push(key);
    }
    return currentKeys;
}
exports.keys = keys;
function values(obj) {
    const currentValues = [];
    for (let key in obj) {
        currentValues.push(obj[key]);
    }
    return currentValues;
}
exports.values = values;

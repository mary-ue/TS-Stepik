"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.len = void 0;
function len(arg) {
    return arg.length;
}
exports.len = len;
len('abc');
len(['abc']);
len({ length: 12 });
const obj1 = { a: 1, length: 1 };
len(obj1);
// ошибка
// len(123);
// len(true);

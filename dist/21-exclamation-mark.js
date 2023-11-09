"use strict";
let word = null;
const number = 10;
if (number > 5) {
    word = 'abc';
}
// здесь точно придет тип string
console.log(word.toLocaleLowerCase());
function printName(name) {
    // там точно будет значение
    const fullName = name;
}
// там точно есть значение
function printName2(person) {
    console.log(person.name);
}

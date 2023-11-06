"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function gradeDeveloper(arr, newLevel) {
    arr.level = newLevel;
}
const dev1 = {
    level: 'junior',
    login: "michey",
    skills: ['HTML', 'CSS', 'JS'],
};
gradeDeveloper(dev1, 'middle');

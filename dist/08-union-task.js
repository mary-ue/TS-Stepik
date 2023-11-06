"use strict";
function gradeDeveloper(arr, newLevel) {
    arr.level = newLevel;
}
const dev1 = {
    level: 'junior',
    login: "michey",
    skills: ['HTML', 'CSS', 'JS'],
};
gradeDeveloper(dev1, 'middle');

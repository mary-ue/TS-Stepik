"use strict";
var ShapeKind;
(function (ShapeKind) {
    ShapeKind[ShapeKind["Circle"] = 0] = "Circle";
    ShapeKind[ShapeKind["Square"] = 1] = "Square";
})(ShapeKind || (ShapeKind = {}));
const myShape = ShapeKind.Circle;
var StatusCode;
(function (StatusCode) {
    StatusCode[StatusCode["ERROR"] = 500] = "ERROR";
    StatusCode[StatusCode["NOT_FOUND"] = 404] = "NOT_FOUND";
    StatusCode[StatusCode["NOT_AUTH"] = 403] = "NOT_AUTH";
})(StatusCode || (StatusCode = {}));
var Grades;
(function (Grades) {
    Grades["Junior"] = "junior";
    Grades["Middle"] = "midle";
    Grades["Senior"] = "senior";
})(Grades || (Grades = {}));
const dev2 = {
    level: Grades.Junior,
    login: 'michey',
    skills: ['HTML', 'CSS', 'JS'],
};
function upGrade(user) {
    if (user.level === Grades.Junior) {
        user.level = Grades.Middle;
    }
    else if (user.level === Grades.Middle) {
        user.level = Grades.Senior;
    }
}

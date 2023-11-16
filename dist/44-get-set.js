"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Car = exports.Rectangle = void 0;
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    ;
    get area() {
        return this.height * this.width;
    }
}
exports.Rectangle = Rectangle;
const rect1 = new Rectangle(20, 12);
console.log('rect1 area: ', rect1.area);
class Car {
    constructor(color, _maxSpeed) {
        this.color = color;
        this._maxSpeed = _maxSpeed;
    }
    ;
    get maxSpeed() {
        return this._maxSpeed;
    }
    set maxSpeed(speed) {
        if (speed > 0)
            this._maxSpeed = speed;
    }
}
exports.Car = Car;
const c1 = new Car('green', 1500);
c1.maxSpeed = 5;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Car = void 0;
class Car {
    go(speed) {
        console.log(`Let us go with speed ${speed.toFixed()}`);
    }
    stop() {
        console.log('Stopped');
    }
}
exports.Car = Car;
const car = new Car;
car.go(12);

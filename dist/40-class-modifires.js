"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vehicle = void 0;
class Vehicle {
    drive(speed) {
        console.log('Let us go with speed ', speed.toFixed());
        this.log(speed);
    }
    stop() {
        console.log('Stopped');
    }
    log(speed) {
        console.log('Vehicle has changed speed to ', speed);
    }
    alternativeLog(text) {
        console.log(text.toUpperCase());
    }
}
exports.Vehicle = Vehicle;
class Car extends Vehicle {
    changeSpeed(speed) {
        this.drive(speed);
        this.alternativeLog('Speed was changed');
    }
}
;
const car1 = new Car();
car1.drive(55);
car1.stop();
// car1.log(33); // нельзя, т.к. log - private, поэтому не наследуется

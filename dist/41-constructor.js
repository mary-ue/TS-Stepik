"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vehicle = void 0;
class Vehicle {
    constructor(createdAt) {
        this.createdAt = createdAt;
    }
    ;
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
    // public color: string;
    // public maxSpeed: number;
    constructor(color, maxSpeed) {
        super(new Date());
        this.color = color;
        this.maxSpeed = maxSpeed;
        // this.color = color;
        // this.maxSpeed = maxSpeed;
    }
}
;

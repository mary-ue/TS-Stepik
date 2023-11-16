"use strict";
class Vehicle {
    stop() {
        console.log('Stopped');
    }
}
class Car extends Vehicle {
    constructor(color) {
        super();
        this.color = color;
    }
    drive(speed) {
        console.log('Let us go with speed ', speed.toFixed());
    }
}
;

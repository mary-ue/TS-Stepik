"use strict";
function isFish(pet) {
    return pet.swim !== undefined;
    // return true;  ???
}
function move(animal) {
    if (isFish(animal)) {
        return animal.swim();
    }
    return animal.fly();
}

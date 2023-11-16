abstract class Vehicle {
  abstract color: string;

  abstract drive(speed: number): void;

  public stop() {
    console.log('Stopped');
  }
}

class Car extends Vehicle {
  constructor(public color: string) {
    super();
  }

  drive(speed: number) {
    console.log('Let us go with speed ', speed.toFixed());
  }
};
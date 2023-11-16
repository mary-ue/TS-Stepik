export class Vehicle {
  constructor (private createdAt: Date) {};

  public drive(speed: number): void {
    console.log('Let us go with speed ', speed.toFixed());
    this.log(speed);
  }
  public stop() {
    console.log('Stopped');
  }
  private log(speed: number) {
    console.log('Vehicle has changed speed to ', speed);
  }
  protected alternativeLog(text: string) {
    console.log(text.toUpperCase());
  }
}

class Car extends Vehicle {
  // public color: string;
  // public maxSpeed: number;

  constructor(public readonly color: string, public maxSpeed: number) {
    super(new Date());
    // this.color = color;
    // this.maxSpeed = maxSpeed;
  }
};
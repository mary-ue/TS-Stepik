export class Circle {
  static pi: number = 3.14;

  constructor(public radius: number) {};

  static calculateArea(radius: number) {
    return this.pi * radius * radius;
  }

  get area() {
    return Circle.pi * this.radius * this.radius;
  }
}

const c1 = new Circle(20);
Circle.pi;
c1.radius;

class Ellips extends Circle {
  constructor(public radius: number) {
    super(radius);
    Circle.pi;
  }
}
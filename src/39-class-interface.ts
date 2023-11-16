interface ICar {
  go(speed: number): void,
  // maxSpeed?: number, // не имеет смысла, в интерфейсах классов надо только обязательные поля
}

export class Car implements ICar {
  go(speed: number) { // надо еще раз прописать тип
    console.log(`Let us go with speed ${speed.toFixed()}`);
  }
  stop() { // можем прописывать дополнительные поля, которых не было в интерфейсе
    console.log('Stopped');
  }
}

const car = new Car;
car.go(12);
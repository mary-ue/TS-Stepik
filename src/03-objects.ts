{
  interface Car {
    wheels: number;
    brand: string;
    type: string;
    isNew?: boolean;
    name?: string;
  
    [key: string]: unknown; // может быть еще много полей
  }
  
  const car: Car = {
    wheels: 4,
    brand: 'BMW',
    type: 'sedan',
  }
  
  // ctrl + space - для подсказок полей 
  const car2: Car = {
    brand: 'BMW',
    type: '',
    wheels: 4,
  }
  
  // car2.go = true;
  car2['go'] = true; // опциональные можно записывать так
}
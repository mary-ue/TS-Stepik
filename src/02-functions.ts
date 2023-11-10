function sum(a: number, b: number): number {
  return a + b;
}
sum(2, 3);

const sum2 = (a: number, b: number): number => a + b;

const sum3 = function (a: number, b: number): number {
  return a + b;
}

// void - функция ничего не вернет во внешний мир, но завершится
function log(name: string): void {
  console.log('Hello ', name);
}

// never - функция никогда не доведет работу до конца, return выполнен не будет
function crash(): never {
  throw new Error('crash');
}

// опциональные параметры - ?
function log2(name: string, userId?: string): void {
  console.log('Hello ', name, 'with ID: ', userId || 'anonym');
}

log2('Mikhail', 'id');

export function average(...nums: number[]): number {
  const sum = nums.reduce((current, total) => current + total, 0);
  return sum / nums.length;
}


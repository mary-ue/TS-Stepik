const numbers: number[] = [1, 2, 3, 4];
const arr: (number | string | boolean)[] = ['1', 1, true];

const strs: string[] = [];
const strs2: Array<string> = [];
strs.push('asv');

interface Car {
  wheels: number;
  brand: string;
}
const cars: Car[] = [];
// cars.push({ brand: 'Audi', wheels: 3 });

// массив внутри другого массива: [ [1, 2, 3], [4, 5, 6] ]
const arrOfArr: string[][] = [];
arrOfArr.push(['', '']);

function printArr(arr: unknown[]): void {
  arr.forEach((el, index) => {
    console.log(el, index);
  })
}
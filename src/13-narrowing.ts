export function example1(x?: number | string) {
  if (typeof x === 'string') {
    x.toLocaleLowerCase();
  } else if (typeof x === 'number') {
    x.toFixed();
  } else if (x === undefined) {
    console.log('no value');
  } else {
    x; // (parameter) x: never
  }
}

function example2(strs: string | string[] | null) {
  // if (typeof strs === 'object') {}; // null - тоже object →　не сработает
  if (strs && typeof strs === 'object') { // TS поймет, что массив
  // if (Array.isArray(strs)) // тоже валидный вариант
    strs.concat([]);
  } else if (typeof strs === 'string') {
    strs.toLocaleLowerCase();
  }
}

function example3 (x: number[] | Date) {
  if (x instanceof Date) {
    x.getMonth();
  } else {
    x.concat([]);
  }
}

type Fish = { swim: () => void };
type Bird = { fly: () => void };

function move(animal: Fish | Bird) {
  if ('swim' in animal) {
    return animal.swim();
  }

  return animal.fly();
}

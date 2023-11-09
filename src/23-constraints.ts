export function len<T extends { length: number }>(arg: T): number {
  return arg.length;
}

len('abc');
len(['abc']);
len({length: 12});

const obj1 = { a: 1, length: 1};
len(obj1);

// ошибка
// len(123);
// len(true);


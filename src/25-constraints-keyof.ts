// U extends keyof T - сократи значения до ключей T (создай юнион из ключей объекта)
export function prop<T, U extends keyof T>(key: U, obj: T): T[U] {
  //            prop<T>(key: keyof T, obj: T): T[keyof T] {
  return obj[key];
}

const obj1 = {a: 1, b: 2, c: 3};  // a, b, c
prop('a', obj1);
// prop('d', obj1);      // mistake

// task
export function keys<O extends object>(obj: O): Array<keyof O> {
  const currentKeys = [];

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) currentKeys.push(key);
  }

  return currentKeys;
}


export function values<O extends object>(obj: O): Array<O[keyof O]> {
  const currentValues = [];

  for (let key in obj) {
    currentValues.push(obj[key]);
  }

  return currentValues;
}



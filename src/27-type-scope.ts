export function tuplePairCreator<T>(first: T) {
  return function<U>(second: U): [T, U] {
    return [first, second];
  }
}

const toTupleWith1 = tuplePairCreator(1);
const val1 = toTupleWith1(2); // const val1: [number, number]
const val2 = toTupleWith1('sd'); // const val2: [number, string]

// task 
export function createMap<T>(list: T[]) {
  return function<U>(cb: (x: T) => U): U[] {
    const result = [];

    for (let el of list) {
      result.push(cb(el))
    }

    return result;
  }
}

const mapNums = createMap([1, 2, 3]);
const result = mapNums((num) => num + 2);
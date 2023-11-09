// Array<string>
// Promise<number>

type TypeFactory<T> = T;
type XType = TypeFactory<string>;
type XType2 = TypeFactory<number>;
type XType3 = TypeFactory<boolean>;

function toArray<T>(...args: T[]): T[] {
  return args;
}

toArray<number>(1, 2, 3);
toArray('af', 'sd');

interface ModelData<T> {
  title: string,
  value: T, 
}

const obj123: ModelData<number> = {
  title: 'asd',
  value: 12,
}

const obj456: ModelData<Array<number>> = {  // массив чисел
  title: '132jh',
  value: [13, 123],
}

const head1 = <T>(value: readonly T[]): T => value[0];

function append<T>(el: T, list: T[]): T[] {
  return list.concat(el)
}

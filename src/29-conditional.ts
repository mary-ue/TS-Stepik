const x = 16;
const isNegative = x >= 0 ? 'no' :'yes'; // const isNegative: "no" | "yes"

interface StringRecord {
  [key: string]: string,
}

interface DateRecord {
  [key: string]: Date,
}

type MyRecord<T> = T extends string ? StringRecord : DateRecord;

type Obj1 = MyRecord<string>; // type Obj1 = StringRecord
type Obj2 = MyRecord<number>; // type Obj2 = DateRecord
const o1: Obj1 = {
  r: '123',
}

export {};
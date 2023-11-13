export {};

// Exclude - исключи
type T0 = Exclude<'a' | 'b' | 'c', 'a'>; // type T0 = "b" | "c"
type T1 = Exclude<'a' | 'b' | 'c', 'a' | 'b' | 'd'>; // type T1 = "c"
type T2 = Exclude<string | number | (() => void), Function>;

type Status = 'success' | 'clientError' | 'serverError' | 200 | 401 | 504;
type NumericStatus = Exclude<Status, string>; // type NumericStatus = 200 | 401 | 504
type TextStatus = Exclude<Status, number>; // type TextStatus = "success" | "clientError" | "serverError"

// Extract - извлеки
type T00 = Extract<'a' | 'b' | 'c', 'a'>; // type T00 = "a"
type T10 = Extract<'a' | 'b' | 'c', 'a' | 'b' | 'd'>; // type T10 = "a" | "b"
type T20 = Extract<string | number | (() => void), Function>; // type T20 = () => void

interface Person {
  age: number,
  firstName: string,
  lastName: string,
  sex: 'male' | 'female',
  country: string,
  education: string,
  skills: string[],
}

type PersonNames = Extract<keyof Person, 'firstName' | 'lastName' | 'fullName'>; // type PersonNames = "firstName" | "lastName"

// NonNullable
type T000 = NonNullable<string | number | undefined>; // type T000 = string | number
type T111 = NonNullable<string[] | null | undefined>; // type T111 = string[]


// task
type Computer = {
  brand: string,
  year: number,
  isAvailable: boolean,
}

type T00000 = Extract<keyof Computer, string>; // type T00000 = "brand" | "year" | "isAvailable"
// Операция keyof Computer даст нам union строковых литералов, поэтому типы значений, 
// которые могли бы быть назначены им в рамках алиаса Computer уже не важны.

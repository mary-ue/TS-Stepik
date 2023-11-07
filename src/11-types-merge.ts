type Union1 = 'a' | 'b' | 'c' | 'd';
type Union2 = 'a' | 'e' | 'c' | 'i';
type Union3 = Union1 | Union2; // type Union3 = "a" | "b" | "c" | "d" | "e" | "i" - all variants
type Union4 = Union1 & Union2; // type Union4 = "a" | "c" - только общие варианты

export type User = {
  readonly email: string,
  readonly login: string,
  password: string,
}

type Person = {
  readonly firstName: string,
  lastName: string,
  phone?: string,
  yearOfBirth?: number,
}

type Employee = {
  contractStart: Date,
} & User & Person;

type Developer = {
  contractStart: Date;
  level?: 'junior' | 'middle' | 'senior';
  say(): void,
  code?: (arg: string) => void,
} & Employee;


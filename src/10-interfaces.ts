export interface User {
  readonly email: string,
  readonly login: string,
  password: string,
}

export interface User {
  isOnline?: boolean,
}

interface Window {
  isAuth?: boolean;
}

// window.isAuth;

interface Person {
  readonly firstName: string,
  lastName: string,
  phone?: string,
  yearOfBirth?: number,
}

interface Employee extends User, Person {};

interface Developer extends Employee {
  contractStart: Date;
  level?: 'junior' | 'middle' | 'senior';
  say(): void,
  code?: (arg: string) => void,
};

// class MyDeveloper implements Developer {};
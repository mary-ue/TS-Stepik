export {};

// Record
type WellKnownBrands = 'apple' | 'lenovo' | 'hp' | 'dell' | 'microsoft' | 'huawei';

type Names = Record<string, number>;
type BrandNames = Record<WellKnownBrands, string>;

const myBrands: BrandNames = {
  lenovo: 'well',
  apple: '',
  dell: '',
  hp: '',
  huawei: '',
  microsoft: ''
}

const names: Names = {
  'dsgagsdg': 1,
}

// Pick - что выбрать?
interface Todo {
  id: string,
  title: string,
  description: string,
  completed: boolean,
  createdAt: number,
}

type SimpleTodo = Pick<Todo, 'id' | 'title' | 'completed'>;
// type SimpleTodo = {
//     id: string;
//     title: string;
//     completed: boolean;
// }

// Omit - что выбросить?
type SimpleTodo2 = Omit<Todo, 'description' | 'createdAt'>;
// type SimpleTodo2 = {
//     id: string;
//     title: string;
//     completed: boolean;
// }

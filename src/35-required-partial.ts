export {};

interface Todo {
  id: string,
  title: string,
  description: string,
  completed: boolean,
  createdAt: number,
}

// делает все значения readonly
type ReadOnlyTodo = Readonly<Todo>;
// type ReadOnlyTodo = {
//   readonly id: string;
//   readonly title: string;
//   readonly description: string;
//   readonly completed: boolean;
//   readonly createdAt: number;
// }

// все поля становятся не обязательными
type PartialTodo = Partial<Todo>;
// type PartialTodo = {
//   id?: string | undefined;
//   title?: string | undefined;
//   description?: string | undefined;
//   completed?: boolean | undefined;
//   createdAt?: number | undefined;
// }
function updateTodo(todo: Todo, fieldsToUpdate: PartialTodo) {
  return { ...todo, ...fieldsToUpdate };
}

// делает все поля обязательными
type RequiredTodo = Required<Todo>;
// type RequiredTodo = {
//   id: string;
//   title: string;
//   description: string;
//   completed: boolean;
//   createdAt: number;
// }


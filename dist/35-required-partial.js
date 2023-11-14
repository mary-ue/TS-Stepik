"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// type PartialTodo = {
//   id?: string | undefined;
//   title?: string | undefined;
//   description?: string | undefined;
//   completed?: boolean | undefined;
//   createdAt?: number | undefined;
// }
function updateTodo(todo, fieldsToUpdate) {
    return Object.assign(Object.assign({}, todo), fieldsToUpdate);
}
// type RequiredTodo = {
//   id: string;
//   title: string;
//   description: string;
//   completed: boolean;
//   createdAt: number;
// }

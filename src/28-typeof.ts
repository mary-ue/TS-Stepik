import { average } from "./02-functions";
type Fn = typeof average; // type fn = (...nums: number[]) => number

const max: Fn = (...numbers) => Math.max(...numbers);
max(1, 2, 3);


let Str = 'Hello world';
type X = typeof Str; // type x = string


// когда надо получить возвращаемое значение
type ReturnFn = ReturnType<typeof average>; //type ReturnFn = number

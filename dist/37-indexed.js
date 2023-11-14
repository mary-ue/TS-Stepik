"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const arr = [1, 'afd', true, '', ''];
// hack - вытащить юнион всех значений, которые лежат в массиве
const sizes = ['small', 'medium', 'large']; // const sizes: readonly ["small", "medium", "large"]

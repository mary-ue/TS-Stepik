"use strict";
// Array<string>
// Promise<number>
function toArray(...args) {
    return args;
}
toArray(1, 2, 3);
toArray('af', 'sd');
const obj123 = {
    title: 'asd',
    value: 12,
};
const obj456 = {
    title: '132jh',
    value: [13, 123],
};
const head1 = (value) => value[0];
function append(el, list) {
    return list.concat(el);
}

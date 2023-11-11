type answer_1 = 64 extends number ? true : false; // type answer_1 = true

type answer_2 = number extends 64 ? true : false; // type answer_2 = false

type answer_3 = string[] extends any ? true : false; // type answer_3 = true

type answer_4 = string[] extends any[] ? true : false; // type answer_4 = true

type answer_5 = never extends any ? true : false; // type answer_5 = true

type answer_6 = any extends any ? true : false; // type answer_6 = true

type answer_7 = Date extends { new(...args: any[]): any } ? true : false; // type answer_7 = false

type answer_8 = typeof Date extends { new(...args: any[]): any } ? true : false; // type answer_8 = true

type T0 = typeof NaN extends number ? true : false; // type T0 = true

type T3 = { getDay(): number } extends Date ? true : false; // type T3 = false

type T4 = (number | string) extends string ? true : false; // type T4 = false

export {};
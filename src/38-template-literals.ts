export {};

type Side = 'top' | 'right' | 'bottom' | 'left';
type Margin = `margin-${Side}`; // type Margin = "margin-top" | "margin-right" | "margin-bottom" | "margin-left"

// Capitalize делает первую букву заглавной
type Padding = `padding${'' | Capitalize<Side>}`; // type Padding = "padding" | "paddingTop" | "paddingRight" | "paddingBottom" | "paddingLeft"


type Direction = 'down' | 'left' | 'right' | 'up';
type Position = 'top' | 'bottom';
type Entry = 'in' | 'out';
type FadeClassNames = `fade${Capitalize<Entry>}${Capitalize<'' | Direction | Position>}`;
// type FadeClassNames = "fadeIn" | "fadeInTop" | "fadeInRight" | "fadeInBottom" | 
// "fadeInLeft" | "fadeInDown" | "fadeInUp" | "fadeOut" | "fadeOutTop" | "fadeOutRight" 
// | "fadeOutBottom" | "fadeOutLeft" | "fadeOutDown" | "fadeOutUp"

// as помогает сформировать что-то в шаблонном варианте
interface Car {
  brand: string,
  model: string,
  year: number,
}

type CarFactory = {
  [K in keyof Car as `set${Capitalize<K>}`] : (car: Car, value: Car[K]) => void;
}
// type CarFactory = {
//   setBrand: (car: Car, value: string) => void;
//   setModel: (car: Car, value: string) => void;
//   setYear: (car: Car, value: number) => void;
// }

// task
type Style = 'none' | 'dotted' | 'dashed' | 'solid';
type Color = 'Red' | 'Green' | 'Blue' | 'Black' | 'White';
type BorderStyle = `${Style} ${Uncapitalize<Color>}`;

let borderStyle: BorderStyle = 'solid red';
let borderStyle2: BorderStyle = 'dashed white';

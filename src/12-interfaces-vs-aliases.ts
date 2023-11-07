// Aliases
// 1. primitives, union
// 2. Нельзя дублировать, например, type Window - НЕ корректная запись

// Interfaces
// Можно дублировать, type Window - корректная запись
// Класс через implements

// могут в начале названия добавить I
export interface IPerson {}

interface IProduct {
  price: number,
  isNew: boolean,
  isSale: boolean,
  title: string,
}

interface IVehicle {
  wheels: number,
  year: Date,
  brand: string,
}

interface ICar extends IProduct, IVehicle {
  type: string,
  model: string,
}

type Product = {
  price: number,
  isNew: boolean,
  isSale: boolean,
  title: string,
}

type Vehicle =  {
  wheels: number,
  year: Date,
  brand: string,
}

type Car = {
  type: string,
  model: string,
} & Product & Vehicle;
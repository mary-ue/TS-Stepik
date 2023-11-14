export {};

interface DataModel {
  id: string,
  title: string,
  elements: {
    header: {
      title: string,
      description: string,
      links: string[],
    },
    footer: {
      description: string,
      links: string[],
    },
    body: [
      {
        title: string,
        content: {},
      },
    ],
  }
}

type T0 = DataModel['elements']['footer'];
// type T0 = {
//   description: string;
//   links: string[];
// }

type SomeTuple = [number, string, boolean, ...string[]];
const arr: SomeTuple = [1, 'afd', true, '', ''];
type T1 = SomeTuple[1]; // type T1 = string

// hack - вытащить юнион всех значений, которые лежат в массиве
const sizes = ['small', 'medium', 'large'] as const; // const sizes: readonly ["small", "medium", "large"]
type T2 = typeof sizes[number]; // type T2 = "small" | "medium" | "large"


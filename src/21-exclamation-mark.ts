let word: string | null = null;
const number = 10;

if (number > 5) {
  word = 'abc';
}
// здесь точно придет тип string
console.log(word!.toLocaleLowerCase());

function printName(name?: string) {
  // там точно будет значение
  const fullName: string = name!;
}

interface Person {
  name: string,
  age: number,
}

// там точно есть значение
function printName2(person?: Person) {
  console.log(person!.name);
}



type Level = 'junior' | 'middle' | 'senior';

export interface Developer {
  login: string,
  skills: string[],
  level: Level, 
}

function gradeDeveloper(arr: Developer, newLevel: Level) {
  arr.level = newLevel;
}

const dev1: Developer = {
  level: 'junior',
  login: "michey",
  skills: ['HTML', 'CSS', 'JS'],
}
gradeDeveloper(dev1, 'middle');

interface User {
  login: string,
  email: string,
  password: string,
  isOnline: boolean,
  lastVisited: Date,
}

interface Admin {
  login: string,
  email: string,
  password: string,
  isOnline: boolean,
  lastVisited: Date,
  role: string,
}

export const user1: User = {
  login: 'michey',
  email: 'some@email.com',
  isOnline: false,
  password: '12345',
  lastVisited: new Date(2022, 6, 2),
}

const admin1: Admin = {
  login: 'michey',
  email: 'some@email.com',
  isOnline: false,
  password: '12345',
  lastVisited: new Date(2022, 6, 2),
  role: 'SuperAdmin',

}

const login = (auth: User | Admin) => {
  if (auth.login.length > 0 && auth.password.length > 0) {
    console.log(`Welcome, ${auth.login}`);
  }
}

login(user1);
login(admin1);
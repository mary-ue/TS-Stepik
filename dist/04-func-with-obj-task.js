"use strict";
const user1 = {
    login: 'michey',
    email: 'some@email.com',
    isOnline: false,
    password: '12345',
    lastVisited: new Date(2022, 6, 2),
};
const admin1 = {
    login: 'michey',
    email: 'some@email.com',
    isOnline: false,
    password: '12345',
    lastVisited: new Date(2022, 6, 2),
    role: 'SuperAdmin',
};
const login = (auth) => {
    if (auth.login.length > 0 && auth.password.length > 0) {
        console.log(`Welcome, ${auth.login}`);
    }
};
login(user1);
login(admin1);

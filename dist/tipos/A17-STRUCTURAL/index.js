"use strict";
const verifyUser = (user, setValue) => {
    return (user.username === setValue.username && user.password === setValue.password);
};
const userA = { username: 'alex', password: '123456' };
const sentUser = { username: 'alex', password: '     ' };
const loggedIn = verifyUser(userA, sentUser);
console.log(loggedIn);
//# sourceMappingURL=index.js.map
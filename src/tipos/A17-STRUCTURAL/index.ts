type User = { username: string; password: string };
type VerifyUserFn = (user: User, sentValue: User) => boolean;

const verifyUser: VerifyUserFn = (user, setValue) => {
  return (
    user.username === setValue.username && user.password === setValue.password
  );
};

const userA = { username: 'alex', password: '123456' };
const sentUser = { username: 'alex', password: '     ' };
const loggedIn = verifyUser(userA, sentUser);

console.log(loggedIn);

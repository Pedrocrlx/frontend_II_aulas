interface User {
  name: string;
  location?: string; //? optional field
  age?: number;
  email?: string;
}

const user: User = {
  name: "Pedro",
  email: "stuff",
};

console.log(user.name, user.email);

function AuthenticateUser(user: User): String;

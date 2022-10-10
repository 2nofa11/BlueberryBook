export const challenge = () => {
  type User = {
    name: string;
    age: number;
    premiumUser: boolean;
  };

  const data: string = `
  uhyo,26,1
  Jhon,17,0
  Mary,14,1`;

  // コードを書く
  const users: User[] = [];
  const lines = data.split("\n");
  for (const line of lines) {
    if (line === "") {
      continue;
    }
    const [name, ageString, premiumUserString] = line.split(",");
    const user: User = {
      name: name.replace(" ", ""),
      age: Number(ageString),
      premiumUser: premiumUserString === "1",
    };
    users.push(user);
  }
  for (const user of users) {
    if (user.premiumUser) {
      console.log(`${user.name} (${user.age})はプレミアムユーザーです。`);
    } else {
      console.log(
        `${user.name} (${user.age})はプレミアムユーザーではありません。`
      );
    }
  }
};

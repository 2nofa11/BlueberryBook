export const challenge = () => {
  type User = {
    name: string;
    age: number;
    premiumUser: boolean;
  };

  const data: string = `
  uhyo,26,1
  Jhon,17,0
  Mary,14,1
  `;

  // コードを書く
  const users: User[] = [];
  const userInfo = data.split("\n");
  for (const info of userInfo) {
    if (info.match(/,/)) {
      const userInfo = info.split(",");
      const user: User = {
        name: userInfo[0].replace(" ", ""),
        age: Number(userInfo[1]),
        premiumUser: Boolean(Number(userInfo[2])),
      };
      users.push(user);
    }
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

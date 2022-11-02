export function getFirstFiveLetters(strOrNum: string | number) {
  const str = strOrNum as string;
  return str.slice(0, 5);
}

type Animal = {
  tag: "animal";
  species: string;
};

type Human = {
  tag: "human";
  name: string;
  age?: number;
};

type User = Animal | Human;

function getNameIfAllHuman(users: readonly User[]): string[] | undefined {
  // every:配列がすべて条件を満たす場合にTrue
  if (users.every((user) => user.tag === "human")) {
    // 条件文により「Human[]」しか入らない
    return (users as Human[]).map((users) => users.name);
  }
  return undefined;
}

export const exeNames = () => {
  const humans: User[] = [
    { name: "uhyo", tag: "human" },
    { name: "jhon", tag: "human" },
  ];
  return getNameIfAllHuman(humans);
};

function getOneUserName(user1?: Human, user2?: Human): string | undefined {
  if (user1 === undefined && user2 === undefined) {
    return undefined;
  }
  if (user1 !== undefined) {
    return user1.name;
  }
  return user2!.name;
}

// names = ["uhyo","jhon"]
const names = ["uhyo", "jhon"] as const;
// readonly ["uhyo","jhon"]
type namesType = typeof names;
// type Name =
type name = namesType[number];

// これだと何が入っているかわからない（型を明示的に出す必要あり⇒その中のどれでもLookup関数）
const hoge = names[1];

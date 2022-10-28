type Animal = {
  species: string;
  age: string;
};
type Human = {
  name: string;
  age: number;
};

type MysteryFunc = ((str: string) => string) | ((str: string) => number);

type User = Animal | Human;

const tama: User = {
  species: "cats",
  age: "永遠の17歳",
};

const uhyo: User = {
  name: "uhyo",
  age: 10,
};

const propagationUnion = (user: User) => {
  const age = user.age;
};

export const unionType = () => {
  console.log(tama);
  console.log(uhyo);
};

export function useFnc(func: MysteryFunc) {
  const result = func("1000");
  console.log(result);
}

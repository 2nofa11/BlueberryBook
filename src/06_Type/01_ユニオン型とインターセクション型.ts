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

type IntersectionHuman = Animal & {
  name: string;
};

const cat: Animal = {
  species: "cat",
  age: "3",
};

const uhyo2: IntersectionHuman = {
  species: "human",
  age: "4",
  name: "uhyo",
};

type StringAndNumber = string & number;
// const cat1: Animal & string = {
//   species: "a",
//   age: "a",
// };

type Human4 = { name: string };
type Animal4 = { species: number };

function getName(human: Human4) {
  return human.name;
}
function getSpecies(animal: Animal4) {
  return animal.species;
}

const mystery = Math.random() < 0.5 ? getName : getSpecies;
export const exeMystery = () => {
  const uhyo: Human4 & Animal4 = { name: "uhyo", species: 1 };
  console.log(mystery(uhyo));
};

const name = "uhyo";
const age = 26;

export { name as uhyoName, age, Animal, tame };

export const getUhyoName = () => {
  return name;
};

type Animal = {
  species: string;
  age: number;
};

const tame: Animal = {
  species: "cat",
  age: 2,
};

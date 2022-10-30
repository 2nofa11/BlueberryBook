type Human = {
  type: "human";
  name: string;
  age: bigint;
};

export function setAge(human: Human, age: Human["age"]) {
  return {
    ...human,
    age,
  };
}

export const uhyo: Human = {
  type: "human",
  name: "uhyo",
  age: 26n,
};

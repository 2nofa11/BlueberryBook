import { type } from "os";

export const structuralSubtypes = () => {
  type FooBar = {
    foo: string;
    bar: number;
  };
  type FooBarBaz = {
    foo: string;
    bar: number;
    baz: boolean;
  };
  const obj1: FooBarBaz = {
    foo: "hi",
    bar: 1,
    baz: true,
  };
  const obj2: FooBar = obj1;
  console.log(obj2);
};

export const family = () => {
  type Animal = {
    age: number;
  };
  type Human = {
    age: number;
    name: string;
  };

  type AnimalFamily = {
    familyName: string;
    mother: Animal;
    father: Animal;
    child: Animal;
  };
  type HumanFamily = {
    familyName: string;
    mother: Human;
    father: Human;
    child: Human;
  };

  const humanFamily: HumanFamily = {
    familyName: "Human",
    mother: { age: 10, name: "mom" },
    father: { age: 10, name: "dad" },
    child: { age: 10, name: "kid" },
  };
  console.log(humanFamily);
  const animalFamily: AnimalFamily = humanFamily;
  console.log(animalFamily);
};

export const user = () => {
  type User = { name: string; age: number };
  const obj = {
    name: "taro",
    age: 12,
    tel: "09011112222",
  };
  const obj2: User = obj;
  console.log(obj2);
};

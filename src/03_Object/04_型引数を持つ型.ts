export const typeArgument = () => {
  type User<T> = {
    name: string;
    child: T;
  };
  const user: User<number> = {
    name: "hoge",
    child: 2,
  };
  console.log(user);
};

export const useExtends = () => {
  type HasName = {
    name: string;
  };
  type Family<Parent extends HasName, Child extends Parent> = {
    mother: Parent;
    father: Parent;
    child: Child;
  };

  type Animal = {
    name: string;
  };
  type Human = {
    name: string;
    age: number;
  };
  type T = Family<Animal, Human>;
  const t: T = {
    mother: { name: "mom" },
    father: { name: "dad" },
    child: { name: "kid", age: 10 },
  };
  console.log(t);
};

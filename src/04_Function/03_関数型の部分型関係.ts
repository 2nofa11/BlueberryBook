export const partialTypeByReturn = () => {
  type HasName = {
    // T
    name: string;
  };
  type HasNameAndAge = {
    // S
    name: string;
    age: number;
  };
  // S
  const fromAge = (age: number): HasNameAndAge => ({ name: "John", age });
  // T
  const f: (age: number) => HasName = fromAge;
  // 引数の型が同じ前提でのお話
  const obj: HasName = f(100);
  console.log(obj);
};

export const partialTypeByArg = () => {
  type HasName = {
    // T
    name: string;
  };
  type HasNameAndAge = {
    // S
    name: string;
    age: number;
  };
  // T
  const showName = (obj: HasName, num: number) => {
    console.log(obj.name);
  };
  // S
  // showNameの型「(obj: HasName) => void」
  const g: (obj: HasNameAndAge, num: number) => void = showName;

  g({ name: "ABC", age: 1 }, 100);
};

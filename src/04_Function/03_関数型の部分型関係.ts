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

export const partialTypeByArgCount = () => {
  type UnaryFunc = (arg: number) => number;
  type BinaryFunc = (left: number, right: number) => number;

  const double: UnaryFunc = (arg) => arg * 2;
  const add: BinaryFunc = (left, right) => left + right;
  // BinaryFuncが使えることの確認
  const result = add(10, 20);
  console.log(result);
  // 部分型関係を利用
  const bin: BinaryFunc = double;
  console.log(bin(10, 20));
};

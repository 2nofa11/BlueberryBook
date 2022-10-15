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

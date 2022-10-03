export const associativeArray = () => {
  const obj = {
    foo: 123,
    bar: "Hello world",
  };
  console.log(obj.foo);
  console.log(obj.bar);
};

export const basic1 = (input: string) => {
  const age = 28;
  const user = {
    // 演算子使用
    user: input ? input : "名無し",
    // プロパティ:変数名
    age,
  };
  console.log(user);
};

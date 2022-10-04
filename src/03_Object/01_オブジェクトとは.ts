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

export const basic2 = () => {
  const propName = "hoge";
  const obj = {
    foo: 123,
    "foo bar": -500,
    "↑": "", //文字列リテラル
    1: "one", //数値リテラル
    [propName]: 123, //計算されたプロパティ名
    // hoge:"e" エラーになる
  };
  console.log(obj["foo bar"]);
  console.log(obj[1]);
  console.log(obj.hoge);
};

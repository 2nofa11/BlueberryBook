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

import { createInterface } from "readline";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

const message = {
  good: "0以上",
  bad: "負の値",
};

export const propertyAccess = () => {
  rl.question("数値を入力してください", (line) => {
    const num = Number(line);
    console.log(message[num >= 0 ? "good" : "bad"]);
    rl.close();
  });
};

export const spread1 = () => {
  const obj = {
    bar: 456,
    baz: 789,
  };

  const obj2 = {
    foo: 123,
    ...obj,
  };

  console.log(obj2);
};

export const spread2 = () => {
  const obj = {
    bar: 456,
    baz: 789,
    foo: 123,
  };

  const obj2 = {
    ...obj,
    foo: 999,
  };

  console.log(obj2);
};

export const spread3 = () => {
  const obj1 = {
    foo: 1,
    bar: 2,
  };
  const obj2 = {
    bar: 999,
    baz: 3,
  };
  const obj = {
    ...obj1,
    ...obj2,
  };
  console.log(obj);
};

export const objectInfo = () => {
  const foo = { num: 1234 };
  console.log(foo.num);
  const bar = foo;
  bar.num = 0;
  console.log(foo.num);
  const baz = { ...foo };
  baz.num = 111;
  console.log(foo.num);
};

export const objectInfoSpread = () => {
  const foo = { obj: { num: 1234 } };
  const fooCopy = foo;
  console.log(foo === fooCopy ? "一致" : "別オブジェクトなので不一致");

  const bar = { ...foo };

  console.log(foo === bar ? "一致" : "別オブジェクトなので不一致");
  bar.obj.num = 0;
  console.log(foo.obj.num);
};

// 結果は式から発生する。式は演算子を使う。

// 単項演算子（+,-,++,--）
export const unaryOperator1 = () => {
  const x = 123;
  const minusX = -x;
  console.log(minusX);
};

export const unaryOperator2 = () => {
  const str: string = "123";
  console.log(+str + 100);
};

export const increment_decrement = () => {
  let foo = 10;
  foo++;
  console.log(foo++);
  --foo;
  console.log(foo--);
};

// 比較演算子と等価演算子

//大小比較の例
export const comparisonOperator = () => {
  const left1 = -5;
  const right1 = 0;
  console.log(left1 > right1);

  const left2 = 100n;
  const right2 = 50n;
  console.log(left2 >= right2);
};

import { createInterface } from "readline";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

export const equalityOperator = () => {
  rl.question("パスワードを入力してください", (password) => {
    // とてもよくつかわる文（厳密な一致判定）
    if (password === "foo") return console.log("ようこそ");
    console.log("誰？");
    rl.close();
  });
};

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

export const logicalOperator = () => {
  rl.question("数値を入力してください", (line) => {
    const num = Number(line);
    // ある審議値がfalseの時のみに処理を行う時に!使用
    if (!Number.isNaN(num)) console.log("NaNでない");

    if (0 <= num && num < 100) return console.log(`${num}は0以上100未満です`);
    console.log(`${num}は0以上100未満ではありません`);
    rl.close();
  });
};

export const shortCircuitRating1 = () => {
  const input1 = "123";
  const input2 = "";

  console.log(!!input1);
  console.log(!!input2);
};

export const shortCircuitRating2 = () => {
  rl.question("名前を入力してください", (name) => {
    const displayName = name || "名無し";
    console.log(`こんにちわ、${displayName}さん`);
    rl.close();
  });
};

// 条件演算子
export const conditionalOperator = () => {
  rl.question("数値を入力してください", (line) => {
    const num = Number(line);
    const message =
      0 <= num && num < 100
        ? `${num}は0以上100未満です。`
        : `${num}は0以上100未満ではありません`;
    console.log(message);
    rl.close();
  });
};

// 代入演算子
export const assignmentOperator = () => {
  rl.question("名前を入力してください", (name) => {
    if (name === "") {
      name = "名無し";
    }
    console.log(`${name}さん、ようこそ`);
    rl.close();
  });
};

// 2.2 変数の宣言と使用

export const sentence1 = () => {
  const greeting = "Hello, ";
  const target = "world";
  return greeting + target;
};

export const sentence2 = () => {
  const greeting = "Hello, ",
    target = "world!",
    text = greeting + target;
  return text;
};

// 識別子

export const sentence3 = () => {
  const あいう = 123;
  const 技術評論社 = あいう + 876;
  return 技術評論社;
};

// 型注釈

export const sentence4 = () => {
  const greeting: string = "Hi, ";
  const target: string = "world";
  return greeting + target;
};

// letによる変数宣言と変数への再代入
export const sentence5 = () => {
  // constだと「定数であるため、'greeting' に代入することはできません」
  let greeting = "Hello, ";
  greeting = greeting + "World!";
  return greeting;
};

// 変数に型注釈を与えた場合のコンパイルエラー
export const sentence6 = () => {
  let greeting: string, target: string;
  greeting = "Hello, ";
  target = "world";
  // 割り当てられる前に使用されるとエラー
  return greeting + target;
};

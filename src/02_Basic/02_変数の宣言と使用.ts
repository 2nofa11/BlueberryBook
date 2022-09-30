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

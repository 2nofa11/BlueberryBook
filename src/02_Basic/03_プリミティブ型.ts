// プリミティブ型とは？

// 文字列
// 数値
// 審議値
// Bigint
// null
// undefined
// 複雑なデータ型もプリミティブ型の組み合わせ

// 雰囲気はこんな感じ
export const sentence1 = () => {
  const width1 = 5;
  const width2 = 8;
  const height: number = 3;
  const area = ((width1 + width2) * height) / 2;
  return area;
};

// 数値リテラル
export const sentence2 = () => {
  const million = 1_000_000;
  const small = 4e-5;
  return { million, small };
};

// 任意制度整数
export const sentence3 = () => {
  const bigNum: bigint = (123n + 456n) * 2n;
  return bigNum;
};

// 文字列型
export const sentence4 = () => {
  const str1: string = "Hello";
  const str2: string = "world";
  return `${str1},${str2}`;
};

//文字列の中のescapeシーケンス
export const sentence5 = () => {
  return "Hello\n\u{796d}";
};

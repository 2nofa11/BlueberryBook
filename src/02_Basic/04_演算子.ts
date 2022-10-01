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

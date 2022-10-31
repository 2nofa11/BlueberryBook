import { functionFinally } from "../05_Class/05_例外処理";

type Human = {
  type: "human";
  name: string;
  age: bigint;
};

export function setAge(human: Human, age: Human["age"]) {
  return {
    ...human,
    age,
  };
}

export const uhyo: Human = {
  type: "human",
  name: "uhyo",
  age: 26n,
};

// 型から別の型を作ることができる
type HumanKeys = keyof Human;

const mmConversionTable = {
  mm: 1,
  cm: 10,
  m: 1e3,
  km: 1e6,
};

export function convertUnit(
  value: number,
  unit: keyof typeof mmConversionTable
) {
  const mmValue = value * mmConversionTable[unit];
  return {
    mm: mmValue,
    cm: mmValue / 10,
    m: mmValue / 1e3,
    km: mmValue / 1e6,
  };
}

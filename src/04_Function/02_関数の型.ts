export const xRepeat1: F = (num: number): string => "x".repeat(num);
type F = (num: number) => string;

export const xRepeat2 = (num: number) => "x".repeat(num);

export const g = (num: number) => {
  for (let i = 0; i < num; i++) {
    console.log("X");
  }
};

export const range = (min: number, max: number): number[] => {
  const result = [];
  for (let i = min; i <= max; i++) {
    result.push(i);
  }
  return result;
};

export const callBackFnc = () => {
  const num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const arr2 = num.filter((x) => x % 3 === 0);
  console.log(arr2);
};

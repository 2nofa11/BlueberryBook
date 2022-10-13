export const xRepeat1: F = (num: number): string => "x".repeat(num);
type F = (num: number) => string;

export const xRepeat2 = (num: number) => "x".repeat(num);

export const g = (num: number) => {
  for (let i = 0; i < num; i++) {
    console.log("X");
  }
};

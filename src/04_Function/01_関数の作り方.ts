export function range(min: number, max: number): number[] {
  const result = [];
  for (let i = min; i <= max; i++) {
    result.push(i);
  }
  return result;
}

export function helloWorldNTTimes(n: number): void {
  if (n >= 100) {
    console.log(`${n}回なんてむり！`);
    return;
  }
  for (let i = 0; i <= n; i++) {
    console.log("Hello,world!");
  }
}

export type Human = {
  height: number;
  weight: number;
};
export const clacBMI = function ({ height, weight }: Human): number {
  return weight / height ** 2;
};

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

export const contextualTyping = () => {
  type Greet = {
    greet: (str: string) => string;
  };
  const obj: Greet = {
    greet: (str) => `Hi ${str}`,
  };
  console.log(obj.greet("aa"));
};

export const callSignature = () => {
  type MyFunc = {
    isUsed?: boolean; // プロパティ
    (arg: number): void; //コードシグネスチャ（関数型）
  };

  const double: MyFunc = (arg: number) => {
    console.log(arg * 2);
  };

  double.isUsed = true;
  console.log(double.isUsed);
  double(1000);
};

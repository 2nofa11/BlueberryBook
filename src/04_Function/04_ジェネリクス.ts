import { DebugLoggerFunction } from "util";

export const generics = () => {
  function repeat<T>(element: T, length: number): T[] {
    const result: T[] = [];
    for (let i = 0; i < length; i++) {
      result.push(element);
    }
    return result;
  }
  console.log(repeat<string>("a", 5));
  console.log(repeat<number>(0, 5));
};

export const genericsDefine = () => {
  const repeatArrow = <T>(element: T, length: number): T[] => {
    const result: T[] = [];
    for (let i = 0; i < length; i++) {
      result.push(element);
    }
    return result;
  };
  console.log(repeatArrow<string>("repeatArrow", 5));

  const utils = {
    repeat<T>(element: T, length: number): T[] {
      const result: T[] = [];
      for (let i = 0; i < length; i++) {
        result.push(element);
      }
      return result;
    },
  };
  console.log(utils.repeat<string>("utils", 5));

  const pair = <Left, Right>(left: Left, right: Right): [Left, Right] => [
    left,
    right,
  ];
  console.log(pair<number, string>(5, "a"));
};

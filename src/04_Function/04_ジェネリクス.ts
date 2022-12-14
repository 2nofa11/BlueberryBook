import { type } from "os";
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

export const genericsExtends = () => {
  const repeat = <T extends { name: string }>(
    element: T,
    length: number
  ): T[] => {
    const result: T[] = [];
    for (let i = 0; i < length; i++) {
      result.push(element);
    }
    return result;
  };

  type HasNameAndAge = {
    name: string;
    age: number;
  };

  console.log(repeat<HasNameAndAge>({ name: "uhyo", age: 10 }, 2));
};

export const shortcut = () => {
  const repeat = function <T>(element: T, length: number): T[] {
    const result: T[] = [];
    for (let i = 0; i < length; i++) {
      result.push(element);
    }
    return result;
  };

  const result = repeat("a", 3);
  console.log(result);
};

export const funcType = () => {
  type Func = <T>(element: T, length: number) => T[];
  const repeat: Func = function <T>(element: T, length: number): T[] {
    const result: T[] = [];
    for (let i = 0; i < length; i++) {
      result.push(element);
    }
    return result;
  };
};

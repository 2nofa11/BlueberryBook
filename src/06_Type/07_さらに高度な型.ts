type HasToString = {
  toString: () => string;
};

export function useToString(value: HasToString & object) {
  console.log(`value is ${value.toString()}`);
}

function useNever(value: never) {
  const num: number = value;
  const str: string = value;
  const obj: object = value;
}

export function isStringOrNumber(value: unknown): value is string | number {
  return typeof value === "string" || typeof value === "number";
}

type Human = {
  type: "Human";
  name: string;
  age: number;
};

export function isHuman(value: any): value is Human {
  if (value == null) return false;
  return (
    value.type === "Human" &&
    typeof value.name === "string" &&
    typeof value.age === "number"
  );
}

export function assertHuman(value: any): asserts value is Human {
  if (value === null) {
    throw new Error("Given value is null or undef");
  }
  if (
    value.type !== "Human" ||
    typeof value.name !== "string" ||
    typeof value.age !== "number"
  ) {
    throw new Error("not Human");
  }
}

type NumberAndString = [number, ...string[], number];

const arr1: NumberAndString = [1, "a", "b", 9];
const arr2: NumberAndString = [1, 9];

type NSN = [number, string, number];
type SNSNS = [string, ...NSN, string];

// mapped types {[P in K]:T}
type Fruit = "apple" | "orange" | "strawberry";

// FruitNumbers
// apple: number;
// orange: number;
// strawberry: number;
type FruitNumbers = {
  [P in Fruit]: number;
};

export const numbers: FruitNumbers = {
  apple: 1,
  orange: 2,
  strawberry: 9,
};

// FruitArrays
// apple: "apple"[];
// orange: "orange"[];
// strawberry: "strawberry"[];
type FruitArrays = {
  [P in Fruit]: P[];
};

export const numberArr: FruitArrays = {
  apple: ["apple", "apple"],
  orange: ["orange", "orange", "orange"],
  strawberry: ["strawberry"],
};

type RestArg<M> = M extends "string"
  ? [string, string]
  : [number, number, number];

export function func<M extends "string" | "number">(
  mode: M,
  ...args: RestArg<M>
) {
  console.log(mode, args);
}

type RO = Readonly<{
  name: string;
  age: number;
}>;
type PARTICAL = Partial<{
  name: string;
  age: number;
}>;

type PICK = Pick<
  {
    name: string;
    age: number;
  },
  "age"
>;

type Union = "uhyo" | "hoge" | 1 | 2 | 3;
type EXTRACT = Extract<Union, string>;

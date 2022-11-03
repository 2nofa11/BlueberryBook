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

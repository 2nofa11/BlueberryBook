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

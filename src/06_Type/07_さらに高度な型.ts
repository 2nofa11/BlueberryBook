type HasToString = {
  toString: () => string;
};

export function useToString(value: HasToString & object) {
  console.log(`value is ${value.toString()}`);
}

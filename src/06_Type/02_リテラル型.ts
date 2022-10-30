const foo: "foo" = "foo";
const one: 1 = 1;
const t: true = true;
const three: 3n = 3n;

export function getHelloStr(): `Hello, ${string}` {
  const rand = Math.random();
  if (rand < 0.3) {
    return "Hello, world";
  } else {
    return "Hello, my world";
  }
}

function makeKey<T extends string>(userName: T) {
  return `user:${userName}` as const;
}

const uhyoKey: "user:uhyo" = makeKey("uhyo");

export function signNumber(type: "plus" | "minus") {
  return type === "plus" ? 1 : -1;
}

let uhyo1: "uhyo" | "jhon" = "uhyo";

type Uhyo2 = {
  readonly name: string;
  readonly age: number;
};
const uhyo2: Uhyo2 = {
  name: "uhyo",
  age: 26,
};

export const uhyoLiteral = () => {
  console.log(uhyo2);
};

const uhyo5_1 = "uhyo";
const uhyo5_2: "uhyo" = "uhyo";
let uhyo5_3 = uhyo5_1;
let uhyo5_4 = uhyo5_2;

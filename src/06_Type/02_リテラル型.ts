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

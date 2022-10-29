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

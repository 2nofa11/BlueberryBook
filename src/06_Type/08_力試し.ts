type Option<T> = { tag: true; value: T } | { tag: false };

export function answer1() {
  const a: Option<number> = { tag: true, value: 100 };
  console.log(a);
  const b: Option<undefined> = { tag: false };
  console.log(b);
}

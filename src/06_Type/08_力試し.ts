export type Option<T> = { tag: "some"; value: T } | { tag: "none" };

export function answer1() {
  const a: Option<number> = { tag: "some", value: 100 };
  console.log(a);
  const b: Option<undefined> = { tag: "none" };
  console.log(b);
}

export function answer2(obj: Option<number>) {
  if (isSome(obj)) {
    console.log(obj.value);
  }
}

function isSome<T>(obj: Option<T>): obj is { tag: "some"; value: T } {
  return obj.tag === "some";
}

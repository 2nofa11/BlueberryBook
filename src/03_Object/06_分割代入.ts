export const destructuringAssignment1 = () => {
  const obj = { foo: "フー", bar: "バー" };
  const { foo, bar } = obj;
  console.log(foo, bar);
};

export const destructuringAssignment2 = () => {
  const obj = { foo: "フー", bar: "バー", "foo bar": "フーバー" };
  const { foo, bar: barVar, "foo bar": fooBar } = obj;
  console.log(foo, barVar, fooBar);
};

export const nest = () => {
  const nested = {
    num: 123,
    obj: {
      foo: "hello",
      bar: "world",
    },
  };
  const {
    num,
    obj: { foo, bar },
  } = nested;
  console.log(num, foo, bar);
};

export const array = () => {
  const arr = [1, 2, 3, 4, 5, 6];
  const [, foo, , bar, , baz] = arr;
  console.log(foo, bar, baz);
  const tuple: [string, number] = ["hoge", 28];
  const [name, age] = tuple;
  console.log(name, age);
};

export const defaultValue = () => {
  type Obj = { foo?: number };
  const obj1: Obj = {};
  const obj2: Obj = { foo: 123 };

  const { foo = 500 } = obj1;
  console.log(foo);
  const { foo: bar = 500 } = obj2;
  console.log(bar);
};

export const rest = () => {
  const obj = {
    foo: 123,
    bar: "str",
    baz: false,
  };
  const { foo, ...restObj } = obj;
  console.log(foo);
  console.log(restObj);
};

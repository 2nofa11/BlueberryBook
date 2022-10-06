export const objType1 = () => {
  const obj: {
    foo: number;
    bar: string;
  } = {
    foo: 123,
    bar: "Hi, world",
  };
  console.log(obj);
};

export const objType2 = () => {
  type FooBarObj = {
    foo: number;
    bar: string;
  };
  const obj: FooBarObj = {
    foo: 123,
    bar: "hoge",
  };
  console.log(obj);
};

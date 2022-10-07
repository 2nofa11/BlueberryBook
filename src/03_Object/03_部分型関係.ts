export const structuralSubtypes();
= () => {
  type FooBar = {
    foo: string;
    bar: number;
  };
  type FooBarBaz = {
    foo: string;
    bar: number;
    baz: boolean;
  };
  const obj1: FooBarBaz = {
    foo: "hi",
    bar: 1,
    baz: true,
  };
  const obj2: FooBar = obj1;
  console.log(obj2);
};

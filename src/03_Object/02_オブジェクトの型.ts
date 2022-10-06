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

// インデックスシグネスチャ
export const indexSignature = () => {
  type PriceData = {
    [key: string]: number;
  };
  const data: PriceData = {
    apple: 123,
    coffee: 200,
  };
  data.chicken = 111; //これはOK
  // data.弁当 = ""
  console.log(data);
};

export const optionalObj = () => {
  type MyObj = {
    foo: boolean;
    bar: boolean;
    baz?: number;
  };

  const obj: MyObj = { foo: true, bar: true };
  const obj2: MyObj = { foo: true, bar: true, baz: 1 };

  console.log(obj, obj2);
  if (obj2.baz !== undefined) console.log(obj2.baz * 10);
};

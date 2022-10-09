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

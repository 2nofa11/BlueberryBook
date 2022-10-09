export const destructuringAssignment = () => {
  const obj = { foo: "フー", bar: "バー" };
  const { foo, bar } = obj;
  console.log(foo, bar);
};

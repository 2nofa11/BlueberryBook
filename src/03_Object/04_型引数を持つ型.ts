export const typeArgument = () => {
  type User<T> = {
    name: string;
    child: T;
  };
  const user: User<number> = {
    name: "hoge",
    child: 2,
  };
  console.log(user);
};

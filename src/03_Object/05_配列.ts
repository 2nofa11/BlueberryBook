export const array1 = () => {
  const arr1 = [4, 5, 6];
  const arr2 = [1, 2, 3, ...arr1];
  console.log(arr2);
};

export const array2 = () => {
  const arr = [0, 123, -456 * 10];
  console.log(arr);
  arr[1] = 5;
  console.log(arr);
};

export const array3 = () => {
  const arr: boolean[] = [true, false];

  const arr2: Array<{
    name: string;
  }> = [{ name: "山田" }, { name: "佐藤" }];
  console.log(arr);

  const arr3 = [100, true, "文字列"];
};

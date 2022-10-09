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

export const array4 = () => {
  const arr: number[] = [1, 2, 100];
  console.log(arr);
  arr.push(10);
  console.log(arr);
  arr.unshift(-1);
  console.log(arr);
  console.log(arr.includes(1));
};

export const array5 = () => {
  const arr = [1, 10, 100];
  for (const elm of arr) {
    console.log(elm);
  }
};

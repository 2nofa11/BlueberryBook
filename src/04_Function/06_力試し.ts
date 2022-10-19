export const practice = () => {
  for (const i of sequence(1, 100)) {
    const message = getFizzBuzzString(i);
    console.log(message);
  }
};

const getFizzBuzzString = (num: number): string => {
  if (num % 3 === 0 && num % 5 === 0) {
    return "FizzBuzz";
  } else if (num % 3 === 0) {
    return "Fizz";
  } else if (num % 5 === 0) {
    return "Buzz";
  } else {
    return String(num);
  }
};

const sequence = (min: number, max: number): number[] => {
  const numArr: number[] = [];
  for (let i = min; i <= max; i++) {
    numArr.push(i);
  }
  return numArr;
};

export const practiceCallback = () => {
  function map<T, S>(array: T[], callback: (num: T) => S): S[] {
    const newArr: S[] = [];
    for (const i of array) {
      newArr.push(callback(i));
    }
    return newArr;
  }
  const data = [-1, 1, -3, -3, 5, 8, 13];
  const result: boolean[] = map(data, (x) => x >= 0);
  console.log(result);
};

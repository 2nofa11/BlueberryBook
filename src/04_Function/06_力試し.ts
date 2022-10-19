export const practice = () => {
  for (let i = 1; i <= 100; i++) {
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

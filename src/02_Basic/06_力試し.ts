export const fizzBuzz = () => {
  for (let i: number = 1; i <= 100; i++) {
    const surplus3 = i % 3;
    const surplus5 = i % 5;

    if (surplus3 !== 0 && surplus5 !== 0) {
      console.log(i);
    } else if (surplus3 === 0 && surplus5 !== 0) {
      console.log("Fizz");
    } else if (surplus3 !== 0 && surplus5 === 0) {
      console.log("Buzz");
    } else if (surplus3 === 0 && surplus5 === 0) {
      console.log("FizzBuzz");
    }
  }
};

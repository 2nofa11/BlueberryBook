//2.1.1  文と式

export const sentence1 = () => {
  const greeting = "Hello, ";
  const target = "World!";
  return greeting + target;
};

export const sentence2 = () => {
  const greeting = "Hello, ";
  const target = greeting;
  return greeting + target;
};

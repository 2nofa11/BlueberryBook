export const functionScope = () => {
  const repeatLength = 5;
  const repeat = function <T>(element: T): T[] {
    const repeatLength = 3;

    const result: T[] = [];
    for (let i = 0; i < repeatLength; i++) {
      result.push(element);
    }
    return result;
  };

  console.log(repeat("hoge"));
  console.log(repeatLength);
};

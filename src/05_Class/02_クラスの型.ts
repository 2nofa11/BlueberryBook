class User {
  name: string = "";
  age: number = 0;

  isAdult(): boolean {
    return this.age >= 20;
  }
}

export const usingClass = () => {
  const uhyo: User = new User();
  const jhon: User = {
    name: "Jhon",
    age: 12,
    isAdult: () => true,
  };
};

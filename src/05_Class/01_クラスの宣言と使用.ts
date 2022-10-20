class User {
  name?: string;
  age: number = 0;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  isAdult(): boolean {
    return this.age >= 20;
  }

  setAge(newAge: number) {
    this.age = newAge;
  }
}

export const usingClass = () => {
  const uhyo = new User("uhyo", 0);
  console.log(uhyo.isAdult());
  uhyo.setAge(26);
  console.log(uhyo.isAdult());
};

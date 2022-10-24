class User {
  name: string;
  #age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.#age = age;
  }

  public isAdult(): boolean {
    return this.#age >= 20;
  }
}

export const usingThis = () => {
  const uhyo = new User("uhyo", 21);
  const jhon = new User("Jhon", 15);

  console.log(uhyo.isAdult());
  console.log(jhon.isAdult());
  console.log(uhyo.isAdult() === jhon.isAdult());
};

const user = {
  name: "uhyo",
  age: 26,
  isAdult() {
    return this.age >= 20;
  },
};

export const userObj = () => {
  console.log(user.isAdult());
  user.age = 10;
  console.log(user.isAdult());
};

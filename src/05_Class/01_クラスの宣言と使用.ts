class User {
  static adminName: string = "uhyo";
  static getAdminUser() {
    return new User(User.adminName, 23);
  }

  public name: string;
  #age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.#age = age;
  }

  isAdult(): boolean {
    return this.#age >= 20;
  }

  public setAge(newAge: number) {
    this.#age = newAge;
  }
}

export const usingClass = () => {
  const uhyo = new User("uhyo", 1);
  //   console.log(uhyo.#age);
};

export const staticInitializationBlock = () => {
  console.log("Hello");
  class C {
    static {
      console.log("uhyo");
    }
  }
  console.log("world");
};

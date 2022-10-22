class User {
  static adminName: string = "uhyo";
  static getAdminUser() {
    return new User(User.adminName, 23);
  }

  static adminUser: User;
  static {
    this.adminUser = new User("admin", 9999);
  }
  public name: string;
  #age: number = 0;

  constructor(name: string, age: number) {
    this.name = name;
    this.#age = age;
  }

  isAdult(): boolean {
    return this.#age >= 20;
  }

  public setAge(age: number) {
    if (age < 0 || age > 150) return;
    this.#age = age;
  }
  public getAge() {
    return this.#age;
  }
}

export const usingClass = () => {
  const uhyo = new User("uhyo", 1);
  console.log(User.adminUser.getAge());
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

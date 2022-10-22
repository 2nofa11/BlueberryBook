class User<T> {
  static adminName: string = "uhyo";
  static getAdminUser() {
    return new User(User.adminName, 23, "");
  }

  static adminUser: User<string>;
  static {
    this.adminUser = new User("admin", 9999, "");
  }
  public name: string;
  #age: number = 0;
  readonly data: T;

  constructor(name: string, age: number, data: T) {
    this.name = name;
    this.#age = age;
    this.data = data;
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
  const uhyo = new User<string>("uhyo", 1, "追加データ");
  console.log(uhyo.data);
  const jhon = new User<object>("jhon", 100, { num: 123 });
  console.log(jhon.data);
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

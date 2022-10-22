class User {
  static adminName: string = "uhyo";
  static getAdminUser() {
    return new User(User.adminName, 23);
  }

  name?: string;
  private age: number = 0;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  isAdult(): boolean {
    return this.age >= 20;
  }

  public setAge(newAge: number) {
    this.age = newAge;
  }
}

export const usingClass = () => {
  const uhyo = new User("uhyo", 28);
  //   console.log(uhyo.age); errorになる
};

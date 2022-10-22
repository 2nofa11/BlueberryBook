class User {
  static adminName: string = "uhyo";
  static getAdminUser() {
    return new User(User.adminName, 23);
  }

  constructor(public name: string, private age: number = 22) {}

  isAdult(): boolean {
    return this.age >= 20;
  }

  public setAge(newAge: number) {
    this.age = newAge;
  }
}

export const usingClass = () => {
  const uhyo = new User("uhyo", 1);
  console.log(uhyo.isAdult());
};

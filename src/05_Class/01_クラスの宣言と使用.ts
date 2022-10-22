class User {
  static adminName: string = "uhyo";
  static getAdminUser() {
    return new User(User.adminName, 23);
  }

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
  console.log(User.adminName);
  const admin = User.getAdminUser();
  console.log(admin.age);
  console.log(admin.isAdult());

  const uhyo = new User("a", 28);
  //   console.log(uhyo.adminName)
};

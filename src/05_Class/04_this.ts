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

  public filterOlder(users: readonly User[]): User[] {
    return users.filter((user) => user.#age > this.#age);
  }

  public filterOlderFnc(users: User[]): User[] {
    const _this = this;
    return users.filter(function (u) {
      return u.#age > _this.#age;
    });
  }
}

export const usingThis = () => {
  const uhyo = new User("uhyo", 21);
  const jhon = new User("Jhon", 15);
  const Bob = new User("Bob", 100);

  const older = uhyo.filterOlder([jhon, Bob]);
  console.log(older);
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

export const apply = () => {
  const uhyo = new User("uhyo", 21);
  const jhon = new User("Jhon", 15);

  console.log(uhyo.isAdult());

  console.log(uhyo.isAdult.apply(jhon, []));
};

export const bind = () => {
  const uhyo = new User("uhyo", 21);
  const jhon = new User("Jhon", 15);
  const bindIsAdult = uhyo.isAdult.bind(uhyo);

  console.log(`bind=${bindIsAdult()}`);
  console.log(`bind.call=${bindIsAdult.apply(jhon)}`);
};

class A {
  foo = 123;
  bar = this.foo + 100;
  getFoo() {
    return this.foo;
  }
}

export const thisWithoutFnc = () => {
  const obj = new A();
  console.log(obj.bar, obj.getFoo());
};
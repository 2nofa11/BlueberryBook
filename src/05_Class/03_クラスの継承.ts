import exp = require("constants");

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

class PremiumUser extends User {
  rank: number;
  constructor(name: string, age: number, rank: number) {
    super(name, age);
    this.rank = rank;
  }

  public override isAdult(): boolean {
    return true;
  }
}

export const usingPremiumUser = () => {
  const uhyo = new PremiumUser("uhyo", 10, 2);
  console.log(uhyo.rank);
  console.log(uhyo.name);
  console.log(uhyo.isAdult());
};

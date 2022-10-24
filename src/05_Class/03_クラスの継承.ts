import exp = require("constants");

class User implements HasName {
  name: string;
  protected age: number;
  private _isAdult: boolean;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
    this._isAdult = this.age >= 20;
  }

  public isAdult(): boolean {
    return this._isAdult;
  }
}

class PremiumUser extends User {
  rank: number;
  constructor(name: string, age: number, rank: number) {
    super(name, age);
    this.rank = rank;
  }

  setAge(_isAdult: number) {
    this.age = _isAdult;
  }
  // public override isAdult(): boolean {
  //   return this.age >= 10;
  // }
}

export const usingPremiumUser = () => {
  const uhyo = new PremiumUser("uhyo", 9, 2);
  console.log(uhyo.isAdult());
  uhyo.setAge(100);
  console.log(uhyo.isAdult());
};

type HasName = {
  name: string;
};

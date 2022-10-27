// クラスが便利なのは、「メソッドを持ったオブジェクト」を作る場合

class User {
  readonly name: string;
  readonly age: number;

  constructor(n: string, a: number) {
    if (n === "") {
      throw Error("名前は空にできません");
    }
    this.name = n;
    this.age = a;
  }
  // メソッドとしてオブジェクトに備える
  getMessage(message: string): string {
    return `${this.name}(${this.age})「${message}」`;
  }
}

export const useUser = () => {
  const uhyo = new User("uhyo", 26);
  console.log(uhyo.getMessage("こんにちは"));
};

export const createUser = (n: string, a: number) => {
  return function (m: string): string {
    return `${n}(${a})「${m}」`;
  };
};

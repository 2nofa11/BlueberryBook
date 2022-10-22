import { type } from "os";

class User {
  name: string = "";
  age: number = 0;

  isAdult(): boolean {
    return this.age >= 20;
  }
}

export const usingClass = () => {
  const uhyo: User = new User();
  const jhon: User = {
    name: "Jhon",
    age: 12,
    isAdult: () => true,
  };


  type MyUserConstructor = new () => User
  // UserはMyUserConstrictor型を持つ
  const MyUser:MyUserConstructor = User
  // MyUserはnewで使用可能
  const u = new MyUser()
  // uはuser型を持つ
  console.log(u.name,u.age)

};

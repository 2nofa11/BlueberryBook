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

export const usingInstanceof = () =>{
  const uhyo = new User()
  console.log(uhyo instanceof User)

  const jhon:User ={
    name:"Jhon",
    age:10,
    isAdult:() => true
  }
  console.log(jhon instanceof User)
}

type HasAge = {
  age:number
}
class HasUser {
  name:string;
  age:number;

  constructor(name:string,age:number){
    this.name = name
    this.age = age
  }
}

function getPrice(customer:HasAge){
  if(customer instanceof HasUser && customer.name === "uhyo") return 0
  return customer.age < 18 ? 1000 : 1800
}


export const useCaseInstanceof = () =>{
  const customer1:HasAge = {age:15}
  const customer2:HasAge = {age:20}
  const uhyo = new HasUser("uhyo",19)

  console.log(getPrice(customer1))
  console.log(getPrice(customer2))
  console.log(getPrice(uhyo))
}
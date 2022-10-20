class User {
    name?:string;
    age:number = 0;
}

export const usingClass = () =>{
    const uhyo = new User();
    console.log(uhyo);
    uhyo.name = "uhyo";
    uhyo.age = 20;
    console.log(uhyo);
}
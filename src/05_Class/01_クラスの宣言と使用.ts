class User {
    name?:string;
    readonly age:number = 0;
}

export const usingClass = () =>{
    const uhyo = new User();
    console.log(uhyo);
    uhyo.name = "uhyo";
    console.log(uhyo);
}
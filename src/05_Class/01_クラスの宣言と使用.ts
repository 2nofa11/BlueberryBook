class User {
    name?:string;
    private age:number = 0;

    isAdult():boolean {
        return this.age >= 20;
    }

    setAge(newAge:number){
        this.age = newAge
    }
}

export const usingClass = () =>{
    const uhyo = new User();
    const baby = new User();
    console.log(uhyo.isAdult());
    uhyo.setAge(26)
    console.log(uhyo.isAdult());
    console.log(baby.isAdult());
}
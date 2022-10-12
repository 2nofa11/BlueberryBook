import { restParameters } from "./04_Function/01_関数の作り方";
console.log(restParameters(1, 2, 3));
const numbers = [1, 2, 3, 4, 5];
console.log(restParameters(1, 2, 3, ...numbers));

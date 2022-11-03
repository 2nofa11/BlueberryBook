import { assertHuman } from "./06_Type/07_さらに高度な型";

const something: unknown = null;
assertHuman(something);
console.log(something.type);

import { isHuman } from "./06_Type/07_さらに高度な型";

const something: unknown = { type: "Human", name: "uhyo", age: 26 };

if (isHuman(something)) {
  console.log(something.type);
}

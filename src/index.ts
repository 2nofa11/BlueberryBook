import { answer2, Option, doubleOption } from "./06_Type/08_力試し";

const four: Option<number> = {
  tag: "some",
  value: 1000,
};

doubleOption(four);
doubleOption({ tag: "none" });

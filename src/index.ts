import { answer2, Option } from "./06_Type/08_力試し";

const four: Option<number> = {
  tag: "some",
  value: 1000,
};

answer2(four);
answer2({ tag: "none" });

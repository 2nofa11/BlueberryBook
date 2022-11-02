import { useToString } from "./06_Type/07_さらに高度な型";
console.log(
  useToString({
    toString() {
      return "aa";
    },
  })
);
// objectと定義することで入ってくる型を制限する
// console.log(useToString(3.14));

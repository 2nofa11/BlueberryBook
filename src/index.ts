import { isStringOrNumber } from "./06_Type/07_さらに高度な型";

const tmp: unknown = true;

if (isStringOrNumber(tmp)) {
  console.log(tmp.toString());
}

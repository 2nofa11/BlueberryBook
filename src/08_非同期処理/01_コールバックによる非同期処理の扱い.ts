import { readFile } from "fs";

export const callBackExample = () => {
  console.log("1RF");
  readFile("uhyo.txt", (data) => {
    console.log("2RF");
  });
  console.log("3RF");
};

export const callBackMapExample = () => {
  const map = [1, 2, 3];
  console.log("1Map");
  map.map((num) => {
    console.log(num);
    String(num);
  });
  console.log("3Map");
};

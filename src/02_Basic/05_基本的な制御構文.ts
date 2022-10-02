export const if1 = (userName: string) => {
  if (userName === "") userName = "名無し";
  console.log(userName);
};

export const if2 = (userName: string) => {
  if (userName === "") {
    console.log("名前入れて");
    userName = "名無し";
  }
};

export const ifElse = (userName: string) => {
  if (userName !== "") {
    console.log("名前あって偉い");
  } else {
    console.log("名前入力しろ");
    userName = "名無し";
  }
};

import { createInterface } from "readline";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

export const switch1 = () => {
  rl.question("コマンドを入力してください", (name) => {
    switch (name) {
      case "greet":
        console.log("こんにちは。");
        break;
      case "cat":
        console.log("あなたは猫派？");
        break;
      default:
        console.log("名前を入れてください");
    }
    rl.close();
  });
};

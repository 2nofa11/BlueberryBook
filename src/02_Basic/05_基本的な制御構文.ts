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

export const while1 = () => {
  let sum = 0;
  let i = 1;
  while (i <= 10) {
    sum += i;
    i++;
  }
  console.log(sum);
};

export const while2 = () => {
  let sum = 0;
  let i = 1;
  while (true) {
    if (i > 100) {
      break;
    }
    sum += i;
    i++;
  }
  console.log(sum);
};

export const while3 = () => {
  let i = 1;

  while (i <= 100) {
    i++;
    if (i % 2 === 1) {
      continue;
    }
    console.log(i);
  }
};

export const for1 = () => {
  let sum = 0;
  for (let i: number = 1; i <= 100; i++) sum += i;
  console.log(sum);
};

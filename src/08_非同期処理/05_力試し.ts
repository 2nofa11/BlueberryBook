import { readFile } from "fs/promises";

export const calcUhyo = async (): Promise<number> => {
  let count = 0;
  let currentIndex = 0;
  const sleep = (duration: number) => {
    return new Promise<number>((resolve, reject) => {
      setTimeout(reject, duration);
    });
  };

  console.log("非同期スタート");
  sleep(1).catch((e) => {
    console.log("時間切れ");
    count = 0;
    return 0;
  });
  const data = await readFile("uhyo.txt", "utf8").then();

  while (true) {
    const nextIndex = data.indexOf("uhyo", currentIndex);
    if (nextIndex >= 0) {
      count++;
      currentIndex = nextIndex + 1;
    } else {
      console.log("非同期終了");
      break;
    }
  }
  console.log("非同期外");
  return count;
};

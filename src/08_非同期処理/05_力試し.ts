import { readFile } from "fs/promises";

export const calcUhyo = async (): Promise<number> => {
  let count = 0;
  let currentIndex = 0;
  const sleep = (duration: number) => {
    return new Promise<number>((resolve, reject) => {
      setTimeout(resolve, duration);
    });
  };
  const errorAwait = async () => {
    await sleep(1);
    throw new Error("TO!");
  };
  console.log("非同期スタート");

  const data = await Promise.race([
    readFile("uhyo.txt", "utf8"),
    errorAwait(),
  ]).catch(() => {
    return "";
  }); //失敗した場合はこっちに突っ込まれる

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

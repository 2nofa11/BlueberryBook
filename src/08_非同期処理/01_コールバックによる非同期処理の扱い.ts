// import { readFile } from "fs";
import { performance } from "perf_hooks";

export const callBackExample = () => {
  console.log("1RF");
  const p = readFile("uhyo.txt");
  p.then((data) => {
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

export const timerAsync = () => {
  setTimeout(() => {
    console.log("タイマーが呼び出された");
  }, 3000);
  console.log("タイマーが呼ばれたよ");
};

export const readFileAsync = () => {
  const startTime = performance.now();
  // 三つの引数
  // readFile("uhyo.txt", "utf8", (err, result) => {
  //   const endTime = performance.now();
  //   console.log(endTime - startTime);
  //   console.log(result);
  // });
  console.log("よみ込み開始");
};

export const arrAsyncAndSync = () => {
  setTimeout(() => {
    console.log("タイマーが呼び出された");
  }, 100);
  const startTime = performance.now();
  let count = 0;
  while (performance.now() - startTime < 1000) {
    count++;
  }
  console.log(count);
};
import { readFile } from "fs/promises";
export const promiseTest = () => {
  const p = readFile("uhyo.txt", "utf8");
  p.then((data) => {
    console.log(data);
  });
};

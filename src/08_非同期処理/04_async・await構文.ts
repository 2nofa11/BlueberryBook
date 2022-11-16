import { resolve } from "path";

async function get3(): Promise<number> {
  console.log("get3が呼び出された");
  throw new Error("!");
} // 戻り値が絶対Promiseになるマン

export const asyncFunc = () => {
  console.log("get3呼び出し前");
  const p = get3();
  p.then((result) => {
    console.log(result);
  }).catch((e) => {
    console.log("エラー");
  });
  console.log("get3呼び出し後");
};

export const awaitFunc = () => {
  const sleep = (duration: number) => {
    return new Promise<void>((resolve) => {
      setTimeout(resolve, duration);
    });
  };

  async function get3() {
    console.log("get3が呼び出されました");
    await sleep(1000);
    console.log("★awaitのつぎ");
    return 3;
  }

  console.log("get3が呼び出します");
  const p = get3();
  p.then((num) => {
    console.log(num);
  });
  console.log("★get3が呼び出された");
};

export const awaitFunc2 = () => {
  const sleep = (duration: number) => {
    return new Promise<void>((resolve) => {
      setTimeout(resolve, duration);
    });
  };

  async function get3() {
    await sleep(1000);
    return 3;
  }

  async function main() {
    const num1 = await get3();
    const num2 = await get3();
    const num3 = await get3();
    return num1 + num2 + num3;
  }
  main().then((result) => {
    console.log(result);
  });
};

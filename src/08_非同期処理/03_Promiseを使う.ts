import { readFile } from "fs/promises";
import { resolve } from "path";
export const promiseTest = () => {
  const p = readFile("uhyo.txt", "utf8");
  p.then((data) => {
    console.log(data);
  });
  p.then(() => {
    console.log(1);
  });
  p.then(() => {
    console.log(2);
  });
  console.log("同期処理だから一番早い");
};

export const successOrError = () => {
  const p = readFile("foo.txt", "utf8");
  p.then(
    (result) => {
      console.log("成功", result);
    },
    (error: unknown) => {
      console.log("失敗", error);
    }
  );
};

export const promiseFinally = () => {
  const p = readFile("uhyo.txt", "utf8");
  p.then(
    (result) => {
      console.log("成功", result);
    },
    (e) => {
      console.log("失敗", e);
    }
  );
  p.finally(() => {
    console.log("終了");
  });
};

export const howToMakePromise = () => {
  const sleep = (duration: number) => {
    return new Promise<void>((resolve) => {
      setTimeout(() => resolve, duration);
    });
  };
  // 型引数：number 引数：(resolve) => {}
  // const p = new Promise<number>((resolve) => {
  //   console.log(String(resolve));
  //   setTimeout(() => {
  //     resolve(100);
  //   }, 300);
  // });

  sleep(2000).then((num) => {
    console.log(`結果は${num}ミリ秒たちました`);
  });
};

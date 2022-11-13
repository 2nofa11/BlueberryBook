import { rejects } from "assert";
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
  setTimeout(() => {
    console.log("hoge");
  }, 3000);
  console.log("これがさいしん？");
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
    return new Promise<void>((resolve, reject) => {
      setTimeout(reject, duration);
    });
  };
  // 型引数：number 引数：(resolve) => {}
  const p = new Promise<number>((resolve) => {
    console.log(String(resolve));
    setTimeout(() => {
      resolve(100);
    }, 300);
  });

  sleep(2000).then(
    (num) => {
      console.log(`結果は${num}ミリ秒たちました`);
    },
    (error) => {
      console.log("reject起因によりエラー");
    }
  );
};

export const staticPromise = () => {
  const p = Promise.resolve(100);

  p.then((resolve) => {
    console.log(resolve);
  });
  console.log("1");
};

export const promiseAll = () => {
  const p = Promise.all([
    readFile("foo.txt", "utf8"),
    readFile("foo.txt", "utf8"),
    readFile("baz.txt", "utf8"),
  ]);

  p.then(
    (result) => {
      const [foo, bar, baz] = result;
      console.log("foo.txt", foo);
      console.log("bar.txt", bar);
      console.log("baz.txt", baz);
    },
    (err) => {
      console.log("失敗");
    }
  );
};

export const racePromise = () => {
  const sleepReject = (duration: number) => {
    return new Promise<never>((resolve, reject) => {
      setTimeout(reject, duration);
    });
  };
  const p = Promise.race([readFile("foo.txt", "utf-8"), sleepReject(0)]);

  p.then(
    (result) => {
      console.log("成功", result);
    },
    (e) => {
      console.log("失敗", e);
    }
  );
};

export const allSelectedPromise = () => {
  const sleepReject = (duration: number) => {
    return new Promise<never>((resolve, reject) => {
      setTimeout(reject, duration);
    });
  };

  const p = Promise.allSettled([
    readFile("foo.txt", "utf-8"),
    sleepReject(5000),
  ]);

  p.then((result) => {
    console.log(result);
  });
};

export const anyProcess = () => {
  const sleepReject = (duration: number) => {
    return new Promise<never>((resolve, reject) => {
      setTimeout(reject, duration);
    });
  };

  const p = Promise.any([readFile("foo.txt", "utf-8"), sleepReject(5000)]);

  p.then((result) => {
    console.log(result);
  });
};

export const promiseChain = () => {
  const p = readFile("foo1.txt", "utf8");

  const p2 = p.then(
    (result) => result + result,
    (error) => ""
  );

  p2.then((result) => {
    console.log(result);
  });
};

export const promiseChain1 = () => {
  //　readFileを呼び出し
  readFile("foo.txt", "utf8")
    .finally(() => {
      console.log("finallyCall?");
    })
    //失敗の場合は空文字を返して成功とする
    .catch(() => "")
    //その結果をログで表示
    .then((result) => console.log(result));
};

const repeat10 = (str: string) =>
  new Promise<string>((resolve) => {
    setTimeout(() => resolve(str.repeat(10)), 1000);
  });

export const promiseChain2 = () => {
  const p1 = readFile("foo.txt", "utf-8");
  const p3 = p1.then((result) => {
    console.log(result);
    const p2 = repeat10(result);
    console.log(p2);
    return p2;
  });
  p3.then((result) => {
    console.log(result);
  });
};

export const promiseChain2_1 = () => {
  readFile("foo.txt", "utf-8")
    .then((result) => repeat10(result))
    .then((result) => {
      console.log(result);
    });
};

export const promiseChain3 = () => {
  const p1 = readFile("foo.txt", "utf-8");
  const p2 = p1.then((result) => {
    throw new Error("E");
  });
  p2.then((result) => {
    console.log(result);
  });
};

export const promiseChain3_1 = () => {
  const sleepReject = (duration: number) => {
    return new Promise<never>((resolve, reject) => {
      setTimeout(reject, duration);
    });
  };
  const p = readFile("foo.txt", "utf-8")
    .then(() => sleepReject(1000))
    .then(
      (result) => {
        console.log("OK");
      },
      () => {
        console.log("E");
      }
    );
};

export const successOrError_8_3_10 = () => {
  const p = readFile("error.txt", "utf8");
  const p2 = p.then((result) => {
    console.log("成功", result);
  });
  const p3 = p2.catch((e) => {
    console.log("失敗", e);
  });
};

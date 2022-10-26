// ランタイムエラーとは例外のこと

export const error = () => {
  console.log("エラー発生させます");
  throwError();
  console.log("エラーを発生させました");

  function throwError() {
    const error = new Error("エラーが発生しました！");
    throw error;
  }
};

export const tryCatch = () => {
  try {
    console.log("エラーを発生させる");
    throwError();
    console.log("発生させました");
  } catch (err) {
    console.log("キャッチ");
    console.log(err);
  }
  console.log("おわり");

  function throwError() {
    const error = new Error("エラー発生！");
    throw error;
  }
};

export const globalEscape = () => {
  try {
    throwError();
  } catch (err) {
    console.log(err);
  }

  function throwError() {
    const error = new Error("エラー発生");
    throw error;
    console.log("関数から脱出するのでここでは実行されない");
  }
};

export const exceptionFinally = () => {
  try {
    console.log("エラーを発生させます。");
    thorwError();
    console.log("エラーを発生させました");
  } finally {
    console.log("finallyの後ろ");
  }
  console.log("tryの後ろ");

  function thorwError() {
    throw new Error("エラーが発生！");
  }
};

export const functionFinally = () => {
  console.log(sum(100));

  function sum(max: number) {
    try {
      let result = 0;
      for (let i = 0; i <= max; i++) {
        result += i;
      }
      return result;
    } finally {
      console.log("sumからの脱出");
    }
  }
};

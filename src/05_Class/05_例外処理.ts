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

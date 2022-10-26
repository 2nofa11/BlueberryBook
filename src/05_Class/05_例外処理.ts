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

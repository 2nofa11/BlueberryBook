async function get3(): Promise<number> {
  console.log("get3が呼び出された");
  throw new Error("!");
}

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

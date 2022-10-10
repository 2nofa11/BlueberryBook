export const dateObj = () => {
  const d = new Date();
  console.log(d);
  d.setFullYear(2030);
  console.log(d.getFullYear());
};

export const dateUsing = () => {
  const date = new Date("2020-02-03T15:00:00+09:00");
  const timeNum = date.getTime();
  console.log(timeNum);

  const date2 = new Date(timeNum);
  console.log(date2);
};

export const regularExpression1 = () => {
  const r = /^ab+c/;

  console.log(r.test("abc"));
  console.log(r.test("1abc"));
  console.log(r.test("こんにちわ"));
};

export const regularExpression2 = () => {
  //文字列.replace(正規表現,置換文字列)
  console.log("Hello,abbbbc world! abc".replace(/ab+c/, "foobar"));
  console.log("Hello,abbbbc world! abc".replace(/ab+c/g, "foobar"));

  // 文字列.match(正規表現)
  const result = "Hello,abbbbc world! abc".match(/a(b+)c/);
  if (result !== null) {
    console.log(result[0]);
    console.log(result[1]);
  }
};

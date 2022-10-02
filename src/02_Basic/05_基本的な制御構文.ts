export const if1 = (userName: string) => {
  if (userName === "") userName = "名無し";
  console.log(userName);
};

export const if2 = (userName: string) => {
  if (userName === "") {
    console.log("名前入れて");
    userName = "名無し";
  }
};

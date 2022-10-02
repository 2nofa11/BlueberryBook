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

export const ifElse = (userName: string) => {
  if (userName !== "") {
    console.log("名前あって偉い");
  } else {
    console.log("名前入力しろ");
    userName = "名無し";
  }
};

type SignType = "plus" | "minus";
function signNumber(type: SignType) {
  return type === "plus" ? 1 : -1;
}

export function numberWithSign(num: number, type: SignType | "none") {
  if (type === "none") {
    return 0;
  } else {
    // ポイント
    return num * signNumber(type);
  }
}

export function formatNUmberOrString(value: string | number) {
  if (typeof value === "number") {
    return value.toFixed(3);
  } else {
    return value;
  }
}

type Animal = {
  tag: "animal";
  species: string;
};

type Human = {
  tag: "human";
  name: string;
};

type User = Animal | Human;

function getUserName(user: User) {
  if (user.tag === "human") {
    return user.name;
  } else {
    return "名無し";
  }
}

const tama: User = {
  tag: "animal",
  species: "cats",
};

const uhyo: User = {
  tag: "human",
  name: "uhyo",
};

export function useADT() {
  console.log(getUserName(tama));
  console.log(getUserName(uhyo));
}

// タグがないためエラー
// const alian: User = {
//   tag: "alian",
//   species: "human_",
// };

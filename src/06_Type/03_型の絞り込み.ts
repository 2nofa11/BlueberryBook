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

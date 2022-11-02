function doWhatever(obj: any) {
  console.log(obj.user.name);
}

export function doNothing(val: unknown) {
  if (typeof val === "string") {
    console.log(val.slice(0, 1));
  } else {
    console.log(val);
  }
}

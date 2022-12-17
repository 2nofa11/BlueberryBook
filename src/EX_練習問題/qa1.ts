type Shape = {
  type: "square" | "triangle";
  width: number;
  height: number;
};

function area(shape: Shape): number {
  if (shape.type === "square") {
    return shape.height * shape.width;
  } else {
    return (shape.height * shape.width) / 2;
  }
}

const square: Shape = {
  type: "square",
  width: 10,
  height: 10,
};

const triangle: Shape = {
  type: "triangle",
  width: 10,
  height: 10,
};

console.log(area(square)); // 100
console.log(area(triangle)); // 50

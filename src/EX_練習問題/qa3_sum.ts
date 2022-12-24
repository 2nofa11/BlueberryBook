type Product = {
  name: string;
  price: number;
};

const array: Product[] = [
  { name: "item1", price: 100 },
  { name: "item2", price: 200 },
  { name: "item3", price: 300 },
];

function minPrice(array: Product[]) {
  // プロパティが最小のものを返す関数を実装する
  return array.reduce((accumulator, currentValue) =>
    currentValue.price < accumulator.price ? currentValue : accumulator
  );
}

console.log(minPrice(array));

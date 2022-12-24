type User = {
  name: string;
  age: number;
  location: string;
};

function greet(user: User) {
  console.log(
    `こんにちは、${user.name}さん。あなたは${user.age}歳で、${user.location}に住んでいますね。`
  );
}

const user: User = {
  name: "John",
  age: 30,
  location: "New York",
};

greet(user); // こんにちは、Johnさん。あなたは30歳で、ニューヨークに住んでいますね。

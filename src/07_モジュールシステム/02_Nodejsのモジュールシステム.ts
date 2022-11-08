import { createInterface } from "readline";

export const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("文字列を入力してください", (line) => {
  console.log(`${line}が入力されました`);
  rl.close();
});

// import fastify from "fastify";

// export const app = fastify();

// app.get("/", (req, reply) => {
//   reply.send("hi,W");
// });

// app.listen(8080);

import express from "express";

export const app = express();

app.get("/", (req, reply) => {
  reply.send("hi,W");
});

app.listen(8080);

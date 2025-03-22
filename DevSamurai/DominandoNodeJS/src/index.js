/* eslint-disable no-constant-condition */
import express from "express";

const app = express();

app.use((req, res, next) => {
  console.log("oii")

   if (!true) return res.json({msg:"error"})

  next()
})

app.get("/hello", (req, res) => {
  const { nome, idade } = req.query;
  return res.status(200).json({
    title: "Hello Amigo",
    body: `Bem vindo ${nome} Ao Meu Server, sua idade é ${idade}`,
  });
});

app.get("/hello/:nome", (req, res) => {
  const nome = req.params.nome;
  return res.status(200).json({
    title: "Hello Amigo",
    body: `Bem vindo ${nome} Ao Meu Server`,
  });
});

app.get("/", function (req, res) {
  return res.send("<h1>oiii</h1>");
});

app.listen("3000", () => {
  console.log("server on in 3000");
});

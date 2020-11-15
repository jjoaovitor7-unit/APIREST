const express = require("express");
const app = express();
app
  .use(express.json())
  .use(express.static("public"));

// porta do servidor
const PORT = 8005;

app.get("/home", function (req, res) {
  return res
    .status(200)
    .sendFile(require("path").join(__dirname, "views", "index.html"));
});

// letra a
app.get("/", function (req, res) {
  return res.status(200).json("Este endpoint utiliza o verbo GET.");
});

// letra b
app.post("/", function (req, res) {
  return res.status(200).json("Este endpoint utiliza o verbo POST.");
});

// letra c
app.put("/", function (req, res) {
  return res.status(200).json("Este endpoint utiliza o verbo PUT.");
});

// letra d
app.post("/:nome", function (req, res) {
  return res
    .status(200)
    .json(`Este endpoint recebe o nome ${req.params.nome} via URL.`);
});

// letra e
app.put("/estudante", function (req, res) {
  return res
    .status(200)
    .json(
      `Este endpoint recebe o nome ${req.body.nome} via Corpo da Requisição.`
    );
});

// letra f
app.delete("/", function (req, res) {
  return res.status(200).json("Este endpoint utiliza o verbo DELETE.");
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
  console.log("Para parar o servidor: Crtl+C");
});

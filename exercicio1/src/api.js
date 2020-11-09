const express = require("express");
const app = express();
app.use(express.json());

// porta do servidor
const PORT = 8005;

// letra a
app.get("/", (req, res) => {
  return res.status(200).json("Este endpoint utiliza o verbo GET.");
});

// letra b
app.post("/", (req, res) => {
  return res.status(200).json("Este endpoint utiliza o verbo POST.");
});

// letra c
app.put("/", (req, res) => {
  return res.status(200).json("Este endpoint utiliza o verbo PUT.");
});

// letra d
app.post("/:nome", (req, res) => {
  return res
    .status(200)
    .json(`Este endpoint recebe o nome ${req.params.nome} via URL.`);
});

// letra e
app.put("/estudante", (req, res) => {
    const putReq = req.body;
  return res
    .status(200)
    .json(`Este endpoint recebe o nome ${putReq.name} via Corpo da Requisição.`);
});

// letra f
app.delete("/", (req, res) => {
  return res.status(200).json("Este endpoint utiliza o verbo DELETE.");
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
  console.log("Para parar o servidor: Crtl+C");
});

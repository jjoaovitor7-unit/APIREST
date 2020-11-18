const express = require("express");
const app = express();
app.use(express.json());

// porta do servidor
const PORT = 8005;

const Estudante = require("./Estudante.js");

const LocalDateTime = require("@js-joda/core").LocalDateTime;

// letra a
app.post("/estudante", function (req, res) {
  let estudante = new Estudante(req.body.id, req.body.matricula, req.body.nome, LocalDateTime.now());
  if (estudante.nome == "Marcio"){
    return res.status(202).json(true);
  }
  else {
    return res.status(400).json(false);
  }
});

// letra b
app.get("/home", function (req, res) {
  return res.status(202).json("Home da API");
});

// letra c
app.put("/estudante", function (req, res) {
  let estudante = new Estudante(req.body.id, req.body.matricula, req.body.nome, LocalDateTime.now());
  if (estudante.id == null){
    return res.status(406).json(false);
  }
  else {
    return res.status(200).json(true);
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
  console.log("Para parar o servidor: Crtl+C");
});

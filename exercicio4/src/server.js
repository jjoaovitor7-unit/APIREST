const express = require("express");
const app = express();
app.use(express.json());

// porta do servidor
const PORT = 8005;

const db = require("quick.db");

app.post("/cadastrarcliente", function (req, res) {
  let agencia = req.body.agencia;
  let contaCorrente = req.body.conta_corrente;
  let nomeCompleto = req.body.nome_completo;
  let tel = req.body.tel;

  db.set(`conta_${agencia + contaCorrente + nomeCompleto + tel}`, 0);

  return res.status(200).json({
    Agência: req.body.agencia,
    "Conta Corrente": req.body.conta_corrente,
    "Nome Completo": req.body.nome_completo,
    Telefone: req.body.tel,
  });
});

app.get("/visualizarconta", function (req, res) {
  let agencia = req.body.agencia;
  let contaCorrente = req.body.conta_corrente;
  let nomeCompleto = req.body.nome_completo;
  let tel = req.body.tel;

  return res.status(200).json({
    Saldo: db.fetch(`conta_${agencia + contaCorrente + nomeCompleto + tel}`),
  });
});

app.get("/realizardeposito", function (req, res) {
  let agencia = req.body.agencia;
  let contaCorrente = req.body.conta_corrente;
  let nomeCompleto = req.body.nome_completo;
  let tel = req.body.tel;
  let deposit = req.body.deposit;

  db.add(`conta_${agencia + contaCorrente + nomeCompleto + tel}`, deposit);

  return res.status(200).json({
    "Novo Saldo": db.fetch(
      `conta_${agencia + contaCorrente + nomeCompleto + tel}`
    ),
  });
});

app.put("/realizarsaque", function(req, res) {
  let agencia = req.body.agencia;
  let contaCorrente = req.body.conta_corrente;
  let nomeCompleto = req.body.nome_completo;
  let tel = req.body.tel;
  let saque = req.body.saque;

  db.subtract(`conta_${agencia + contaCorrente + nomeCompleto + tel}`, saque);
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
  console.log("Para parar o servidor: Crtl+C");
});

let express = require("express");
let router = express.Router();

const db = require("quick.db");

router.post("/cadastrarcliente", function (req, res) {
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

router.get("/visualizarconta", function (req, res) {
  let agencia = req.body.agencia;
  let contaCorrente = req.body.conta_corrente;
  let nomeCompleto = req.body.nome_completo;
  let tel = req.body.tel;

  return res.status(200).json({
    Saldo: db.fetch(`conta_${agencia + contaCorrente + nomeCompleto + tel}`),
  });
});

router.get("/realizardeposito", function (req, res) {
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

router.put("/realizarsaque", function(req, res) {
  let agencia = req.body.agencia;
  let contaCorrente = req.body.conta_corrente;
  let nomeCompleto = req.body.nome_completo;
  let tel = req.body.tel;
  let saque = req.body.saque;

  db.subtract(`conta_${agencia + contaCorrente + nomeCompleto + tel}`, saque);
  return res.status(200).json({
    "Novo Saldo": db.fetch(
      `conta_${agencia + contaCorrente + nomeCompleto + tel}`
    ),
  });
});

module.exports = router;
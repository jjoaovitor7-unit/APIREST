let express = require("express");
let router = express.Router();

const Cliente = require("./Cliente.js");
const db = require("quick.db");

router.post("/cadastrarcliente", function (req, res) {
  let cliente = new Cliente(
    req.body.agencia,
    req.body.conta_corrente,
    req.body.nome_completo,
    req.body.tel
  );

  db.set(`conta_${cliente.agencia + cliente.contaCorrente + cliente.nomeCompleto + client.tel}`, 0);

  return res.status(200).json({
    Agência: req.body.agencia,
    "Conta Corrente": req.body.conta_corrente,
    "Nome Completo": req.body.nome_completo,
    Telefone: req.body.tel,
  });
});

router.get("/visualizarconta", function (req, res) {
  let cliente = new Cliente(
    req.body.agencia,
    req.body.conta_corrente,
    req.body.nome_completo,
    req.body.tel
  );

  return res.status(200).json({
    Saldo: db.fetch(`conta_${cliente.agencia + cliente.contaCorrente + cliente.nomeCompleto + cliente.tel}`),
  });
});

router.put("/realizardeposito", function (req, res) {
  let cliente = new Cliente(
    req.body.agencia,
    req.body.conta_corrente,
    req.body.nome_completo,
    req.body.tel
  );
  let deposit = req.body.deposit;

  db.add(`conta_${cliente.agencia + cliente.contaCorrente + cliente.nomeCompleto + cliente.tel}`, deposit);

  return res.status(200).json({
    "Novo Saldo": db.fetch(
      `conta_${cliente.agencia + cliente.contaCorrente + cliente.nomeCompleto + cliente.tel}`
    ),
  });
});

router.put("/realizarsaque", function (req, res) {
  let cliente = new Cliente(
    req.body.agencia,
    req.body.conta_corrente,
    req.body.nome_completo,
    req.body.tel
  );
  let saque = req.body.saque;

  db.subtract(`conta_${cliente.agencia + cliente.contaCorrente + cliente.nomeCompleto + cliente.tel}`, saque);
  return res.status(200).json({
    "Novo Saldo": db.fetch(
      `conta_${cliente.agencia + cliente.contaCorrente + cliente.nomeCompleto + cliente.tel}`
    ),
  });
});

module.exports = router;

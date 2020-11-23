const express = require("express");
const app = express();
app.use(express.json());

// porta do servidor
const PORT = 8005;

const { Client } = require("pg");
const Cliente = require("./Cliente.js");
const LocalDateTime = require("@js-joda/core").LocalDateTime;

// const query = `CREATE TABLE Clientes (
//                     id INT PRIMARY KEY NOT NULL,
//                     nome VARCHAR NOT NULL,
//                     endereco VARCHAR,
//                     email VARCHAR,
//                     dataDeCadastro VARCHAR
//                     );
//                 `;

// const query = `DROP TABLE Clientes;`;


// letra a
app.post("/cliente", function (req, res) {
  const client = new Client({
    user: "postgres",
    host: "localhost",
    database: "test",
    password: "12345",
    port: 5432,
  });

  client.connect();

  let cliente = new Cliente(
    req.body.id,
    req.body.nome,
    req.body.endereco,
    req.body.email,
    LocalDateTime.now()
  );

  const query = `INSERT INTO clientes (id, nome, endereco, email, dataDeCadastro)
                 VALUES (${cliente.id}, \'${cliente.nome}\', \'${cliente.endereco}\', \'${cliente.email}\', \'${cliente.dataDeCadastro.year() + "/" + cliente.dataDeCadastro.monthValue() + "/" + cliente.dataDeCadastro.dayOfMonth()}\');`;
  client.query(query, (err) => {
    if (err) {
      console.error(err);
      return res
        .status(400)
        .json("O dado não foi inserido devido a algum erro no Banco de Dados.");
    }
    console.log("Dado inserido!");
    return res.status(200).json(cliente);
    //   console.log("Tabela criada!");
    client.end;
  });
});


// letra b
app.get("/clientes/todos", async function (req, res) {
  const client = new Client({
    user: "postgres",
    host: "localhost",
    database: "test",
    password: "12345",
    port: 5432,
  });

  client.connect();

  let query = await client.query(`SELECT * FROM Clientes`);
  return res.status(200).json(query.rows);
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
  console.log("Para parar o servidor: Crtl+C");
});

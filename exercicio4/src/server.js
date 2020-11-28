const express = require("express");
const app = express();
app.use(express.json());

// porta do servidor
const PORT = 8005;

let banco = require("./banco.js");
app.use("/banco", banco);

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
  console.log("Para parar o servidor: Crtl+C");
});

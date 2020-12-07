const express = require("express");
const app = express();
app.use(express.json());

// porta do servidor
const PORT = 8005;

let empresa = require("./empresa.js");
app.use("/empresa", empresa);

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
  console.log("Para parar o servidor: Crtl+C");
});

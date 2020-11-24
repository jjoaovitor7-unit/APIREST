const express = require("express");
const app = express();
app.use(express.json())

// porta do servidor
const PORT = 8005;

const swaggerUI = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");

const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: "API Exercício 1",
      version: '1.0',
      description: "Informações da API do Exercício 1",
      servers: ["http://localhost:8005"]
    }
  },
  apis: ["./src/server.js"],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));

/**
 * @swagger
 * /:
 *  get:
 *    description: Requisição GET na rota /
 *    responses:
 *      200:
 *        description: Este endpoint utiliza o verbo GET.
 */

// letra a
app.get("/", function(req, res) {
  return res.status(200).json("Este endpoint utiliza o verbo GET.");
});

/**
 * @swagger
 * /:
 *  post:
 *    description: Requisição POST na rota /
 *    responses:
 *      200:
 *        description: Este endpoint utiliza o verbo POST.
 */

// letra b
app.post("/", function(req, res) {
  return res.status(200).json("Este endpoint utiliza o verbo POST.");
});

/**
 * @swagger
 * /:
 *  put:
 *    description: Requisição PUT na rota /
 *    responses:
 *      200:
 *        description: Este endpoint utiliza o verbo PUT.
 */

// letra c
app.put("/", function(req, res) {
  return res.status(200).json("Este endpoint utiliza o verbo PUT.");
});

/**
 * @swagger
 * /{nome}:
 *  post:
 *    description: Requisição POST na rota /
 *    responses:
 *      200:
 *        description: Este endpoint recebe o nome x via URL.
 *    parameters:
 *      - nome: nome
 *        description: nome
 *        in: path
 *        required: false
 *        type: string
 */

// letra d
app.post("/:nome", function(req, res) {
  return res
    .status(200)
    .json(`Este endpoint recebe o nome ${req.params.nome} via URL.`);
});


/**
 * @swagger
 * /estudante:
 *  put:
 *    description: Requisição PUT na rota /estudante
 *    responses:
 *      200:
 *        description: Este endpoint recebe o nome x via Corpo da Requisição.
 *    parameters:
 *      - nome: nome
 *        description: nome
 *        in: body
 *        required: true
 */

// letra e
app.put("/estudante", function(req, res) {
  return res
    .status(200)
    .json(
      `Este endpoint recebe o nome ${req.body.nome} via Corpo da Requisição.`
    );
});


/**
 * @swagger
 * /:
 *  delete:
 *    description: Requisição DELETE na rota /
 *    responses:
 *      200:
 *      description: Este endpoint utiliza o verbo DELETE.
 */

// letra f
app.delete("/", function(req, res) {
  return res.status(200).json("Este endpoint utiliza o verbo DELETE.");
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
  console.log("Para parar o servidor: Crtl+C");
});

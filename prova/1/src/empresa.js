let express = require("express");
let router = express.Router();

router.post(
  "/maiorsalario",
  require("./controllers/empresaController.js").maiorSalario
);

module.exports = router;

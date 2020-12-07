let express = require("express");
let router = express.Router();

router.get(
  "/maiorsalario",
  require("./controllers/empresaController.js").maiorSalario
);


module.exports = router;

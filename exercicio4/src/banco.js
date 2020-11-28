let express = require("express");
let router = express.Router();

router.post(
  "/cadastrarcliente",
  require("./controller/bancoController").cadastrarcliente
);

router.get(
  "/visualizarconta",
  require("./controller/bancoController").visualizarconta
);

router.put(
  "/realizardeposito",
  require("./controller/bancoController").realizardeposito
);

router.put(
  "/realizarsaque",
  require("./controller/bancoController").realizarsaque
);

module.exports = router;

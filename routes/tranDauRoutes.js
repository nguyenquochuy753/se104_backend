const TranDauController = require("../controllers/tranDauController");
const router = require("express").Router();

router.get("/read", TranDauController.readTranDau);
router.get("/getTranDauById/:id", TranDauController.getTranDauById);
router.post("/add", TranDauController.addTranDau);
router.put("/put", TranDauController.updateTranDau);
router.delete("/delete", TranDauController.deleteTranDau);

module.exports = router;

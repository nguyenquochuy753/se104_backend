const LoaiBanThangController = require("../controllers/loaiBanThangController");
const router = require("express").Router();

router.get("/read", LoaiBanThangController.readLoaiBanThang);
router.post("/add", LoaiBanThangController.addLoaiBanThang);
router.put("/put", LoaiBanThangController.updateLoaiBanThang);
router.delete("/delete/:id", LoaiBanThangController.deleteLoaiBanThang);

module.exports = router;

const bangXepHangController = require("../controllers/bangXepHangController");
const router = require("express").Router();

router.get("/read/:idMG", bangXepHangController.readBangXepHang);
router.get("/read/:idCLB/:idMG", bangXepHangController.readBXHByCLB);
router.post("/add", bangXepHangController.addBangXepHang);
router.patch("/update/:idCLB", bangXepHangController.updateBangXepHang);
router.delete("/delete", bangXepHangController.deleteBangXepHang);
router.get("/sort", bangXepHangController.sort);

module.exports = router;

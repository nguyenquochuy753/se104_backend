const router = require('express').Router()
const CauThuController = require('../controllers/CauThuController');
const upload = require("../models/middleware/uploadImage");

router.post("/taocauthu", upload.single("AVATAR"), CauThuController.TaoCauThu);
router.get('/getcauthu', CauThuController.GetCauThu);
router.patch('/updatecauthu/:id', CauThuController.UpdateCauThu);
router.delete('/deletecauthu/:id', CauThuController.DeleteCauThu);
router.get('/search/:key', CauThuController.SearchCauThu);
router.get('/searchbyMG/:muagiaiID', CauThuController.SearchCauThubyMG);

module.exports = router
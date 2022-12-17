const router = require('express').Router()
const CauThuController = require('../controllers/CauThuController');
const upload = require("../models/middleware/uploadImage");

router.post("/taocauthu", upload.single("AVATAR"), CauThuController.TaoCauThu);
router.get('/getcauthu', CauThuController.GetCauThu);
router.get('/getaplayer/:id', CauThuController.GetaPlayer);
router.patch('/updatecauthu/:id', CauThuController.UpdateCauThu);
router.delete('/deletecauthu/:id', CauThuController.DeleteCauThu);
router.get('/search/:key', CauThuController.SearchCauThu);
router.get('/searchbyMG/:muagiaiID', CauThuController.SearchCauThubyMG);
router.get('/searchbyMG_key/:muagiaiID/:key', CauThuController.SearchCauThubyMG_key);
module.exports = router
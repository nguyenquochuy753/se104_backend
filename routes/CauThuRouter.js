const router = require('express').Router()
const CauThuController = require('../controllers/CauThuController');


router.post('/taocauthu', CauThuController.TaoCauThu);
router.get('/getcauthu', CauThuController.GetCauThu);
router.patch('/updatecauthu/:id', CauThuController.UpdateCauThu);
router.delete('/deletecauthu/:id', CauThuController.DeleteCauThu);

module.exports = router
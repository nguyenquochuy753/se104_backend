const router = require('express').Router()
const CauLacBoController = require('../controllers/CauLacBoController');


router.post('/taocaulacbo', CauLacBoController.TaoCauLacBo);
router.get('/getcaulacbo', CauLacBoController.GetCauLacBo);
router.patch('/updatecaulacbo/:id', CauLacBoController.UpdateCauLacBo);
router.delete('/deletecaulacbo/:id', CauLacBoController.DeleteCauLacBo);

module.exports = router
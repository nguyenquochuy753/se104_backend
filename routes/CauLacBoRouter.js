const router = require('express').Router()
const CauLacBoController = require('../controllers/CauLacBoController');
const upload = require('../models/middleware/uploadImage')



router.post('/taocaulacbo', upload.single('LOGO'), CauLacBoController.TaoCauLacBo);
router.get('/getcaulacbo', CauLacBoController.GetCauLacBo);
router.patch('/updatecaulacbo/:id', CauLacBoController.UpdateCauLacBo);
router.delete('/deletecaulacbo/:id', CauLacBoController.DeleteCauLacBo);
router.get('/search/:key', CauLacBoController.SearchCauLacBo);

module.exports = router
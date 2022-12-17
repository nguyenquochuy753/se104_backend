const router = require('express').Router()
const CauLacBoController = require('../controllers/CauLacBoController');
const upload = require('../models/middleware/uploadImage')



router.post('/taocaulacbo', upload.single('LOGO'), CauLacBoController.TaoCauLacBo);
router.get('/getcaulacbo', CauLacBoController.GetCauLacBo);
router.get('/getaclub/:id', CauLacBoController.GetaClub);
router.patch('/updatecaulacbo/:id', CauLacBoController.UpdateCauLacBo);
router.delete('/deletecaulacbo/:id', CauLacBoController.DeleteCauLacBo);
router.get('/search/:key', CauLacBoController.SearchCauLacBo);
router.get('/searchbyMG/:muagiaiID', CauLacBoController.SearchCauLacBobyMG);
router.post('/themhlv',CauLacBoController.themHLV);
router.post('/themcauthu',CauLacBoController.themCT)
router.get('/searchbyMG_key/:muagiaiID/:key', CauLacBoController.SearchCauLacBobyMG_key);

module.exports = router
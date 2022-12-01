const router = require('express').Router()
const BanThangController = require('../controllers/BanThangController');


router.post('/taobanthang', BanThangController.TaoBanThang);
router.get('/getbanthang', BanThangController.GetBanThang);
router.patch('/updatebanthang/:id', BanThangController.UpdateBanThang);
router.delete('/deletebanthang/:id', BanThangController.DeleteBanThang);

module.exports = router
const router = require('express').Router()
const BanThangController = require('../controllers/BanThangController');
const upload= require('../models/middleware/uploadImage')


router.post('/taobanthang', upload.single('AVATAR'), BanThangController.TaoBanThang);
router.get('/getbanthang', BanThangController.GetBanThang);
router.patch('/updatebanthang/:id', BanThangController.UpdateBanThang);
router.delete('/deletebanthang/:id', BanThangController.DeleteBanThang);

module.exports = router
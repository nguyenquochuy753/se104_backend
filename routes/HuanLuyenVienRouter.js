const router = require('express').Router()
const HuanLuyenVienController = require('../controllers/HuanLuyenVienController');
const upload = require('../models/middleware/uploadImage')


router.post('/taohuanluyenvien', upload.single('AVATAR'), HuanLuyenVienController.TaoHuanLuyenVien);
router.get('/gethuanluyenvien', HuanLuyenVienController.GetHuanLuyenVien);
router.patch('/updatehuanluyenvien/:id', HuanLuyenVienController.UpdateHuanLuyenVien);
router.delete('/deletehuanluyenvien/:id', HuanLuyenVienController.DeleteHuanLuyenVien);
router.get('/search/:key', HuanLuyenVienController.SearchHuanLuyenVien);

module.exports = router
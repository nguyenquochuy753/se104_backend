const router = require('express').Router()
const HuanLuyenVienController = require('../controllers/HuanLuyenVienController');


router.post('/taohuanluyenvien', HuanLuyenVienController.TaoHuanLuyenVien);
router.get('/gethuanluyenvien', HuanLuyenVienController.GetHuanLuyenVien);
router.patch('/updatehuanluyenvien/:id', HuanLuyenVienController.UpdateHuanLuyenVien);
router.delete('/deletehuanluyenvien/:id', HuanLuyenVienController.DeleteHuanLuyenVien);

module.exports = router
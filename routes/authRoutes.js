const authController = require('../controllers/authController');
const router = require('express').Router()

router.post('/dangky', authController.DangKyTaiKhoan);
router.post('/dangnhap', authController.DangNhap)
router.get('/gettaikhoan', authController.GetTaiKhoan)
router.delete('/deletetaikhoan/:id', authController.DeleteTaiKhoan)
router.patch('/updatetaikhoan/:id', authController.UpdateTaiKhoan)
router.get('/search/:key', authController.SearchTaiKhoan);


module.exports = router
const authController = require('../controllers/authController');
const router = require('express').Router()

router.post('/dangky',authController.DangKyTaiKhoan);
router.post('/dangnhap',authController.DangNhap)


module.exports = router
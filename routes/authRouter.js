const authController = require('../controllers/authController');
const router = require('express').Router()

router.post('/dangky',authController.DangKyTaiKhoan);

module.exports = router
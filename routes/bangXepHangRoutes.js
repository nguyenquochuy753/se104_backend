const bangXepHangController = require('../controllers/bangXepHangController')
const router = require('express').Router()

router.get('/read',bangXepHangController.readBangXepHang)

module.exports = router
const bangXepHangController = require('../controllers/bangXepHangController')
const router = require('express').Router()

router.get('/read',bangXepHangController.readBangXepHang)
router.post('/add',bangXepHangController.addBangXepHang)
router.put('/update',bangXepHangController.updateBangXepHang)
router.delete('/delete',bangXepHangController.deleteBangXepHang)

module.exports = router
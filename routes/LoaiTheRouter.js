const router = require('express').Router()
const LoaiTheController = require('../controllers/LoaiTheController');


router.post('/taoloaithe', LoaiTheController.TaoLoaiThe);
router.get('/getloaithe', LoaiTheController.GetLoaiThe);
router.patch('/updateloaithe/:id', LoaiTheController.UpdateLoaiThe);
router.delete('/deleteloaithe/:id', LoaiTheController.DeleteLoaiThe);

module.exports = router
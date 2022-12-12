const router = require('express').Router()
const MuaGiaiController = require('../controllers/MuaGiaiController');
const upload = require('../models/middleware/uploadImage')

router.post('/taomuagiai', upload.single('LOGO'), MuaGiaiController.TaoMuaGiai);
router.get('/getmuagiai', MuaGiaiController.GetMuaGiai);
router.get('/getmuagiai/:muagiaiID', MuaGiaiController.GetMuaGiaibyID);
router.patch('/updatemuagiai/:id', MuaGiaiController.UpdateMuaGiai);
router.delete('/deletemuagiai/:id', MuaGiaiController.DeleteMuaGiai);
router.get('/search/:key', MuaGiaiController.SearchMuaGiai);

module.exports = router
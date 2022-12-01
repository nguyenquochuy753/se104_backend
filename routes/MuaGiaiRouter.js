const router = require('express').Router()
const MuaGiaiController = require('../controllers/MuaGiaiController');


router.post('/taomuagiai', MuaGiaiController.TaoMuaGiai);
router.get('/getmuagiai', MuaGiaiController.GetMuaGiai);
router.patch('/updatemuagiai/:id', MuaGiaiController.UpdateMuaGiai);
router.delete('/deletemuagiai/:id', MuaGiaiController.DeleteMuaGiai);

module.exports = router
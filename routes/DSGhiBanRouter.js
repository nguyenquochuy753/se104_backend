const router = require('express').Router()
const DSGhiBanController = require('../controllers/DSGhiBanController');


router.post('/taodsghiban', DSGhiBanController.TaoDSGhiBan);
router.get('/getdsghiban', DSGhiBanController.GetDSGhiBan);
router.patch('/updatedsghiban/:id', DSGhiBanController.UpdateDSGhiBan);
router.delete('/deletedsghiban/:id', DSGhiBanController.DeleteDSGhiBan);

module.exports = router
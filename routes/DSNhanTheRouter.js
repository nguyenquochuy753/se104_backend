const router = require('express').Router()
const DSNhanTheController = require('../controllers/DSNhanTheController');


router.post('/taodsnhanthe', DSNhanTheController.TaoDSNhanThe);
router.get('/getdsnhanthe', DSNhanTheController.GetDSNhanThe);
router.patch('/updatedsnhanthe/:id', DSNhanTheController.UpdateDSNhanThe);
router.delete('/deletedsnhanthe/:id', DSNhanTheController.DeleteDSNhanThe);

module.exports = router